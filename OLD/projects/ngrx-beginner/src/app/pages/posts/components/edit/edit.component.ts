import { concatMap, map, switchMap } from 'rxjs/operators'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Post } from './../../model/post.model';
import { AppState } from './../../../../store/app.reducers';
import { ROUTER_UTILS } from './../../../../@core/utils/router.utils';
import { PostActions } from '../../store/action-types';
import { selectIdPosts } from '../../store/posts.selectors';
import { concatAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  path = ROUTER_UTILS.config;
  postForm: FormGroup;
  post: Post;
  r$;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

      const formControls ={
        title:['',[]],
        author:['',[]]
      }

      this.postForm = this.fb.group(formControls);

    }

  ngOnInit(): void {

     this.r$ = this.route.params.pipe(
      switchMap( id => this.store.select(selectIdPosts,id).pipe(
          tap(p => this.post = p),
          tap(() => this.postForm.patchValue({...this.post})))
      )
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.r$.unsubscribe();
  }

  onSubmit(){
    const post: Post = {
      ...this.post,
      ...this.postForm.value
    }

    this.store.dispatch(PostActions.updatePost({post}))
    this.router.navigateByUrl(this.path.posts.root)
  }

}

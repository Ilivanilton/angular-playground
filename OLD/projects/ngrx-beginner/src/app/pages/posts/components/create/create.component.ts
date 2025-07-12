import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { ROUTER_UTILS } from './../../../../@core/utils/router.utils';
import { Post } from '../../model/post.model';
import { AppState } from 'projects/ngrx-beginner/src/app/store/app.reducers';
import { PostActions } from '../../store/action-types';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  path = ROUTER_UTILS.config;
  postForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('')
  });

  constructor(
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const post: Post = this.postForm.value;
    this.store.dispatch(PostActions.createPost({post}))
    this.router.navigateByUrl(this.path.posts.root)
  }

}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducers';
import { Post } from './model/post.model';
import { PostActions } from './store/action-types';
import { selectAllPosts } from './store/posts.selectors';

@Component({
  selector: 'app-posts',
  template: `
<div class="row">
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h6 class="h6">Posts Page</h6>
    </div>

    <div>
      <ul>
        <li *ngFor="let post of posts$ | async">{{post.title}}</li>
      </ul>
    </div>

  </main>
</div>
`
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> = this.store.select(selectAllPosts);

  constructor(private store: Store<AppState>){
    this.store.dispatch(PostActions.loadAllPosts());
  }

  ngOnInit(): void { }

}

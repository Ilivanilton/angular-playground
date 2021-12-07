import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { postsReducer } from './store/post.reducers';
import { PostsComponent } from './posts.component';
import { PostsEffects } from './store/post.effects';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('module_posts',postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    RouterModule.forChild([
      { path:'', component: PostsComponent}
    ]),
  ]
})
export class PostsModule { }

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { postsReducer } from './store/post.reducers';
import { PostsComponent } from './posts.component';
import { PostsEffects } from './store/post.effects';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('module_posts',postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    RouterModule.forChild([
      {
        path:'', component: PostsComponent,
        children:[
          { path:'create', component: CreateComponent},
          { path:':id', component: EditComponent},
        ]
      }
    ]),
    ReactiveFormsModule,
  ]
})
export class PostsModule { }

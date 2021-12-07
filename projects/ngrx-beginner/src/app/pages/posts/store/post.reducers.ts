import { createReducer, on } from '@ngrx/store';
import { Post } from '../model/post.model';
import { PostActions } from './action-types';


export interface ModuloPostsState {
  posts: Post[]
}

export const initialModulePostsState: ModuloPostsState = {
    posts:[]
};


export const postsReducer = createReducer(
  initialModulePostsState,
  on(PostActions.loadAllPosts, (state, action) => state ),
  on(PostActions.loadAllPostsSuccess, (state,action) =>
      ({
        ...state,
        posts: action.posts
      })
  )
);

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
  ),
  on(PostActions.createPost, (state, action) => state ),
  on(PostActions.createPostSuccess, (state, { post }) =>
    {
      const newPosts = [...state.posts];
      newPosts.push(post);
      return {...state,posts:newPosts}
    }
  ),
  on(PostActions.deletePost, (state,{ post, idx }) => {
    let newPost = [...state.posts]
    newPost.splice(idx,1)
    return {...state, posts:newPost}
  }),
  on(PostActions.updatePost, (state, { post }) =>{
    const newPost = state.posts.map(p => {
      if(p.id == post.id) return post
      return p
    });
    return {...state,posts:newPost}
  })
);

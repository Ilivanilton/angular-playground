import { createAction, props } from '@ngrx/store';
import { Post } from '../model/post.model';


export const loadAllPosts = createAction(
  "[Posts Resolver] Load All Posts"
);

export const loadAllPostsSuccess = createAction(
  '[Load Posts Effect] All Posts Loaded',
  props<{posts: Post[]}>()
);

export const createPost = createAction(
  '[Posts Create] chama effect',
  props<{post: Post}>()
);

export const createPostSuccess = createAction(
  '[Post create] cria no store',
  props<{post: Post}>()
);

export const deletePost = createAction(
  '[Post delete] Dell post',
  props<{post: Post, idx: number}>()
);

export const updatePost = createAction(
  '[Edit Post] Post Update',
  props<{post: Post}>()
);



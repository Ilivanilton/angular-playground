import { createAction, props } from '@ngrx/store';
import { Post } from '../model/post.model';


export const loadAllPosts = createAction(
  "[Posts Resolver] Load All Posts"
);

export const loadAllPostsSuccess = createAction(
  '[Load Posts Effect] All Posts Loaded',
  props<{posts: Post[]}>()
);


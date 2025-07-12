import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { ModuloPostsState } from './post.reducers';


/**
 * filtra de AppState a prodieadda 'module_posts', que
 * é o nó princioal deste modulo, no json root. E retorna
 * um ModuloPostsState
 */
//export const selectModulePosts = (state: AppState) => state['module_posts']
export const selectModulePosts = createFeatureSelector<ModuloPostsState>('module_posts')

/**
 * Uma especie de filtro:
 * entra POSTS > POSTS > []
 * sai []
 *
// export const selectAllPosts = createSelector(
//   state => state['modulo_posts'],
//   state => state['posts']
// );
 */
export const selectAllPosts = createSelector(
  selectModulePosts,
  state => state.posts
);

export const selectIdPosts = createSelector(
  selectAllPosts,
  (posts,props) => ({...(posts.filter(p => p.id == props.id)[0])})
);

import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { PostsService } from '../services/posts.service';
import { PostActions } from './action-types';

@Injectable({
  providedIn: 'root'
})
export class PostsEffects {

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PostActions.loadAllPosts),
        concatMap(() =>
          this.postsService.getAll().pipe(
            map(posts => PostActions.loadAllPostsSuccess({ posts })),
            catchError(error => EMPTY ))
          ),
    )
  );

  createPost$ = createEffect(()=>
    this.actions$.pipe(
      ofType(PostActions.createPost),
      concatMap(action =>
        this.postsService.create(action.post).pipe(
          map( post => PostActions.createPostSuccess({ post })),
          catchError(error => EMPTY))
      )
    )
  );

  deletePost$ = createEffect(()=>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      concatMap(action =>
        this.postsService.delete(action.post).pipe(
          catchError(error => EMPTY))
      )
    ),
    {dispatch: false}
  );

  updatePost$ = createEffect(()=>
    this.actions$.pipe(
      ofType(PostActions.updatePost),
      concatMap(action =>
        this.postsService.put(action.post).pipe(
          catchError(error => EMPTY))
      )
    ),
    {dispatch: false}
  );


  constructor(
    private actions$: Actions,
    private postsService: PostsService) {}

}

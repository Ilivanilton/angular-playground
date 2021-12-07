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

  constructor(
    private actions$: Actions,
    private postsService: PostsService) {}

}

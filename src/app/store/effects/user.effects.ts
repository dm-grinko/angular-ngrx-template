import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserActionTypes } from '../actions/user.actions.types';

@Injectable()
export class UserEffects {

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.request),
      mergeMap(() => {
        return of({
          type: UserActionTypes.requestSuccess,
          data: {
            name: "Dmitry", 
            age: 33
          }
        });
      })
    )
  );

  constructor(private actions$: Actions) {}
}

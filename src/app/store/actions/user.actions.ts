import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './user.actions.types';
import { IUser } from '../../models';

export const loadUser = createAction(
  UserActionTypes.request
);

export const loadUserSuccess = createAction(
  UserActionTypes.requestSuccess,
  props<{ data: IUser }>()
);

export const loadUserFailure = createAction(
  UserActionTypes.requestFailure,
  props<{ error: any }>()
);

import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/user.actions';
import { IUserState } from './user.reducer.types';
import { AppState } from '../store.types';
import { request, requestError } from './common';
import { IUserAction } from '../actions/user.actions.types';
import { IUser } from 'src/app/models';

export const initialState: IUserState = {
  loading: false
};

export const userReducer = createReducer(
  initialState,
  on(Actions.loadUser, request),
  on(Actions.loadUserSuccess, (state: IUserState, {data}: IUserAction): IUserState => ({
      ...state,
      loading: false,
      error: null,
      data: {
        ...state.data,
        ...data,
      },
    })),
  on(Actions.loadUserFailure, requestError),
);

export const userData = (state: AppState): IUser => state.user?.data;

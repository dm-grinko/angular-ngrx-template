import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { AppState } from '../store.types';

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};

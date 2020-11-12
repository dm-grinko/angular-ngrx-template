import { IUser } from '../../models';

export enum UserActionTypes {
  request = '[User] Load',
  requestSuccess = '[User] Load Success',
  requestFailure = '[User] Load Failure',
}

export interface IUserAction {
  data: IUser;
  type: string;
  error?: any;
}

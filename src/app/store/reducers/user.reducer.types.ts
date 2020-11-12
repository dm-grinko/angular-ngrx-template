import { IUser } from '../../models';

export interface IUserState {
  data?: IUser;
  loading: boolean;
  error?: any;
}


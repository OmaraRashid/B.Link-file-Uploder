
import { UserCredentials } from '../../app/core/model/userCredentails.model';

export interface LoginState {
  userList: UserCredentials;
  loading: boolean;
  error: string | null;
}

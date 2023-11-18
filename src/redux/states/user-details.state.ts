
import { User } from '../../app/core/model/user.details.model';

export interface UserState {
  userList: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

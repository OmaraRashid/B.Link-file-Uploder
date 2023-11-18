
import { UserListResponse } from 'src/app/core/model/user-list.model';
import { User } from '../../app/core/model/user.details.model';

export interface UserState {
  userList?: UserListResponse;
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

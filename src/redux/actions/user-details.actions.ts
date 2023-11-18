import { Action } from '@ngrx/store';
import { UserListResponse } from 'src/app/core/model/user-list.model';

/** CustomerDetailsActionTypes */
/** CustomerDetailsActionTypes */
export enum CustomerDetailsActionTypes {
    LOAD_USERS = '[Customer] Load Users',
    VIEW_USER = '[Customer] View User',
    EDIT_USER = '[Customer] Edit User',
    DELETE_USER = '[Customer] Delete User',
}

/** load users Action */
export class loadUsers implements Action {

    public readonly type = CustomerDetailsActionTypes.LOAD_USERS;
    public constructor (public pageNumber: number) { }
}

/** View User Action */
export class ViewUser implements Action {
    public readonly type = CustomerDetailsActionTypes.VIEW_USER;
    public constructor(public userId: number) { }
}

/** Edit User Action */
export class EditUser implements Action {
    public readonly type = CustomerDetailsActionTypes.EDIT_USER;
    public constructor(public userId: number, public changes: Partial<UserListResponse>) { }
}

/** Delete User Action */
export class DeleteUser implements Action {
    public readonly type = CustomerDetailsActionTypes.DELETE_USER;
    public constructor(public userId: number) { }
}

export type CustomerDetailsAction = 
  | loadUsers 
  | ViewUser 
  | EditUser 
  | DeleteUser;

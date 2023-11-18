import { Action } from '@ngrx/store';
import { UserListResponse } from 'src/app/core/model/user-list.model';
import { User } from 'src/app/core/model/user.details.model';

/** CustomerDetailsActionTypes */
/** CustomerDetailsActionTypes */
export enum CustomerDetailsActionTypes {
    LOAD_USERS = '[Customer] Load Users',
    VIEW_USER = '[Customer] View User',
    EDIT_USER = '[Customer] Edit User',
    DELETE_USER = '[Customer] Delete User',
    CREATE_USER = '[Customer] Create User',
    EDIT_USER_SUCCESS = '[Customer] Edit User Success',
    CREATE_USER_SUCCESS = '[Customer] Create User Success',

}

/** load users Action */
export class loadUsers implements Action {

    public readonly type = CustomerDetailsActionTypes.LOAD_USERS;
    public constructor (public payload?: {UserListResponse:UserListResponse}) { }
}

/** View User Action */
export class ViewUser implements Action {
    public readonly type = CustomerDetailsActionTypes.VIEW_USER;
    public constructor(public userId: User) { }
}

/** Edit User Action */
export class EditUser implements Action {
    public readonly type = CustomerDetailsActionTypes.EDIT_USER;
    public constructor(public userId: number, public changes: any) { }
}

/** Delete User Action */
export class DeleteUser implements Action {
    public readonly type = CustomerDetailsActionTypes.DELETE_USER;
    public constructor(public userId: number) { }
}

/** Edit User Action */
export class CreateUser implements Action {
    public readonly type = CustomerDetailsActionTypes.CREATE_USER;
    public constructor(public changes: any) { }
}


// Inside your user-details.actions.ts
export class EditUserSuccess {
    readonly type = CustomerDetailsActionTypes.EDIT_USER_SUCCESS;
    constructor(public payload: User) {}
  }

  export class CreateUserSuccess {
    readonly type = CustomerDetailsActionTypes.CREATE_USER_SUCCESS;
    constructor(public payload: User) {}
  }
  
export type CustomerDetailsAction = 
  | loadUsers 
  | ViewUser 
  | EditUser 
  | DeleteUser
  | CreateUser
  | EditUserSuccess
  | CreateUserSuccess

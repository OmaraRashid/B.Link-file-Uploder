// login.actions.ts
import { Action } from '@ngrx/store';
import { UserCredentials } from '../../app/core/model/userCredentails.model';

export enum LoginActionTypes {
  LOGIN_REQUEST = '[Login] Login Request',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAILURE = '[Login] Login Failure',
  // Add more actions as needed
}

export class LoginRequest implements Action {
  readonly type = LoginActionTypes.LOGIN_REQUEST;
  constructor(public payload: UserCredentials) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { token: string }) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type LoginActions = LoginRequest | LoginSuccess | LoginFailure;

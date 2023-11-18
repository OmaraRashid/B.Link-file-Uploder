import { Action } from "@ngrx/store";

export enum UserActionTypes {
    LOGIN = '[User] Login',
    LOGIN_SUCCESS = '[User] Login Success',
    LOGIN_FAILURE = '[User] Login Failure',
  }
  
  export class Login implements Action {
    readonly type = UserActionTypes.LOGIN;
    constructor(public payload: { username: string; password: string }) {}
  }
  
  export class LoginSuccess implements Action {
    readonly type = UserActionTypes.LOGIN_SUCCESS;
    constructor(public payload: { token: string }) {}
  }
  
  export class LoginFailure implements Action {
    readonly type = UserActionTypes.LOGIN_FAILURE;
    constructor(public payload: { error: string }) {}
  }
  
  export type UserActions = 
    | Login
    | LoginSuccess
    | LoginFailure;
  
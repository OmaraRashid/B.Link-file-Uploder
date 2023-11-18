import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../../app/user-managment/user-managment.service';
import { LoginActionTypes, LoginSuccess } from '../actions/auth.actions';
import { loadUsers, CustomerDetailsActionTypes, EditUser, EditUserSuccess, CreateUser, CreateUserSuccess } from '../actions/user-details.actions';

@Injectable()
export class UserEffects {
  editUsers$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerDetailsActionTypes.EDIT_USER),
    mergeMap((action: EditUser) =>
      this.userService.editUser(action.userId,action.changes).pipe(
        map((updatedUser) => new EditUserSuccess(updatedUser)),
        catchError(error => of({ type: '[User API] Users Loaded Error', payload: error }))
      )
    )
  )
  );

  createUsers$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerDetailsActionTypes.CREATE_USER),
    mergeMap((action: CreateUser) =>
      this.userService.createUser(action.changes).pipe(
        map((createdUser) => new CreateUserSuccess(createdUser)),
        catchError(error => of({ type: '[User API] Users Loaded Error', payload: error }))
      )
    )
  )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}

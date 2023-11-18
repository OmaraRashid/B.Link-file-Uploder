import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../app/core/authentication/auth.service';
import { LoginActionTypes, LoginRequest, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { of } from 'rxjs';
import { catchError, map, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { loadUsers } from '../actions/user-details.actions';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-managment/user-managment.service';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoginRequest>(LoginActionTypes.LOGIN_REQUEST),
      exhaustMap((action) =>
        this.authService.login(action.payload).pipe(
          map((token) => new LoginSuccess({ token })),
          catchError((error) => of(new LoginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoginSuccess>(LoginActionTypes.LOGIN_SUCCESS),
      exhaustMap((action) =>
      this.userService.getUsers(1).pipe(
        map((users) => new loadUsers({UserListResponse : users})),
        tap(() => {this.router.navigate(['/users']);}),
        catchError((error) => of(new LoginFailure({ error })))
      )
    )
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
  ) {}
}

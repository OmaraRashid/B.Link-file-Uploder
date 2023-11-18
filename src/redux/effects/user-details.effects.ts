// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { UserService } from 'src/app/core/services/user.service';
// import { loadUsers, CustomerDetailsActionTypes } from '../actions/user-details.actions';

// @Injectable()
// export class UserEffects {
//   loadUsers$ = createEffect(() => this.actions$.pipe(
//     ofType(CustomerDetailsActionTypes.LOAD_USERS),
//     mergeMap((action: loadUsers) =>
//       this.userService.getUsers(action.pageNumber).pipe(
//         map(users => ({ type: '[User API] Users Loaded Success', payload: users })),
//         catchError(error => of({ type: '[User API] Users Loaded Error', payload: error }))
//       )
//     )
//   ));

//   constructor(
//     private actions$: Actions,
//     private userService: UserService // Make sure you have this service implemented
//   ) {}
// }


import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectUserState = (state: AppState) => state.userState;

export const selectAllUsers = createSelector(
  selectUserState,
  (state) => {
   return state.userList || undefined;
  }
);

export const selectedUser = createSelector(
    selectUserState,
    (state) => {
     return state.selectedUser;
    }
);


export const selectUserById = (id:number) => createSelector(
    selectUserState,
    (userState) => userState.userList?.data.find(user => user.id === id)
);




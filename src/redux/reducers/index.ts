import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { UserReducer } from './user-details.reducer';
import { UserState } from '../states/user-details.state';
import { CustomerDetailsAction } from '../actions/user-details.actions'; // Import your specific Action type

export interface AppState {
  userState: UserState;
}

export const reducers: ActionReducerMap<AppState, CustomerDetailsAction> = { // Specify CustomerDetailsAction here
  userState: UserReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

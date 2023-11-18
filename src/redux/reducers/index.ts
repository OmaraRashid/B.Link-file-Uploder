import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { UserReducer } from './user-details.reducer';
import { UserState } from '../states/user-details.state';
import { CustomerDetailsAction } from '../actions/user-details.actions';

export interface AppState {
  userState: UserState;
}

export const reducers: ActionReducerMap<AppState, CustomerDetailsAction> = {
  userState: UserReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

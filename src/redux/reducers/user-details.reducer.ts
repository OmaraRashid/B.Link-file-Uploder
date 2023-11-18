import { UserState } from '../states/user-details.state'; // Make sure this path is correct
import {
  CustomerDetailsActionTypes,
  CustomerDetailsAction,
} from '../actions/user-details.actions';

// Define the initial state of the user management feature
function getInitialState(): UserState {
  return {
    userList: [],  // Assuming userList is an array of users
    selectedUser: null,  // Changed from undefined to null
    loading: false,
    error: null,
  };
}

/** UserReducer */
export function UserReducer(
  state: UserState = getInitialState(),
  action: CustomerDetailsAction
): UserState {
  switch (action.type) {
    case CustomerDetailsActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };
    // Implement the success and failure actions once defined
    case CustomerDetailsActionTypes.VIEW_USER:
      const selectedUser = state.userList.find(user => user.id === action.userId);
      return {
        ...state,
        selectedUser: selectedUser || null
      };
    case CustomerDetailsActionTypes.EDIT_USER:
      const updatedUsers = state.userList.map(user => 
        user.id === action.userId ? { ...user, ...action.changes } : user
      );
      return {
        ...state,
        userList: updatedUsers
      };
    case CustomerDetailsActionTypes.DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.userId)
      };
    // Add other cases for additional actions
    default:
      return state;
  }
}

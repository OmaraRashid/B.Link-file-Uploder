import { UserState } from '../states/user-details.state'; // Make sure this path is correct
import {
  CustomerDetailsActionTypes,
  CustomerDetailsAction,
} from '../actions/user-details.actions';

// Define the initial state of the user management feature
function getInitialState(): UserState {
  return {
    userList: {
        data:[],
        page:0,
        per_page:0,
        total_pages:0,
        total:0,
        support:{
          url:'',
text:'',  
        }
    },  // Assuming userList is an array of users
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
        userList:action.payload?.UserListResponse,
        loading: true,
        error: null
      };
    // Implement the success and failure actions once defined
    case CustomerDetailsActionTypes.VIEW_USER:
      const selectedUser = state.userList?.data.find(user => user.id === action.userId.id);
      return {
        ...state,
        selectedUser: selectedUser || null
      };
    default:
      return state;
  }
}

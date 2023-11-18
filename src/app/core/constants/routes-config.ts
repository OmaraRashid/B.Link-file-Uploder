export const environment = {
    apiUrl: 'https://reqres.in'
  };
  
  /** API_URLS */
  export const API_URLS = {
    REQRES_API: {
      LOGIN: {
        url: `${environment.apiUrl}/api/login`,
        method: 'POST',
        api_name: 'Login',
      },
      LIST_USERS: {
        url: `${environment.apiUrl}/api/users`,
        method: 'GET',
        api_name: 'List Users',
      },
      GET_SINGLE_USER: (userId: string) => ({
        url: `${environment.apiUrl}/api/users/${userId}`,
        method: 'GET',
        api_name: 'Get Single User',
      }),
      CREATE_USER: {
        url: `${environment.apiUrl}/api/users`,
        method: 'POST',
        api_name: 'Create User',
      },
      DELETE_USER: (userId: string) => ({
        url: `${environment.apiUrl}/api/users/${userId}`,
        method: 'DELETE',
        api_name: 'Delete User',
      }),
      UPDATE_USER: (userId: string) => ({
        url: `${environment.apiUrl}/api/users/${userId}`,
        method: 'PUT',
        api_name: 'Update User',
      }),
    },
  };
  
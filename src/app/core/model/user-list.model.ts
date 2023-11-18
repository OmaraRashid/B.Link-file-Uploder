// src/app/models/user-list-response.model.ts

import { User } from './user.details.model';

export interface UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
    url: string;
    text: string;
  };
}

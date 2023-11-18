import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
// import { ViewUserComponent } from './view-user/view-user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  // { path: 'users/:id', component: ViewUserComponent },
  // { path: 'users/edit/:id', component: EditUserComponent },
  // { path: 'users/delete/:id', component: DeleteUserComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
// import { ViewUserComponent } from './view-user/view-user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserManagementRoutingModule } from './user-managment-routing.module';
import { UserService } from './user-managment.service';

@NgModule({
  declarations: [
    ListUsersComponent,
    // ViewUserComponent,
    // EditUserComponent,
    // DeleteUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  providers: [UserService]
})
export class UserManagementModule { }

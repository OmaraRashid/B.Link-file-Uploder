import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
// import { ViewUserComponent } from './view-user/view-user.component';
import { UserDialogComponent  } from './edit-create-user/edit-create-user.component';
// import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserManagementRoutingModule } from './user-managment-routing.module';
import { UserService } from './user-managment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ListUsersComponent,
    // ViewUserComponent,
    UserDialogComponent,
    // DeleteUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [UserService]
})
export class UserManagementModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisableDeepLinkGuard } from '../core/authentication/auth.gurad';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: '', 
  component: ListUsersComponent,
  canActivate: [DisableDeepLinkGuard]
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

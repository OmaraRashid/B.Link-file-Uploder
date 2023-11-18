import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { AppState } from 'src/redux/reducers';
import { CreateUser, EditUser } from 'src/redux/actions/user-details.actions';
import { selectAllUsers, selectUserById } from 'src/redux/selectors/user-details.selectors';
import { UserDialogComponent } from '../edit-create-user/edit-create-user.component';
import { User } from '../../core/model/user.details.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  currentPage = 1;
  isLastPage = false;

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.isBottomOfPage() && !this.isLastPage) {
      this.loadMoreUsers();
    }
  }

  private isBottomOfPage(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  loadUsers(): void {
    this.store.select(selectAllUsers, take(1)).subscribe(users => {
      if (users && users.data.length) {
        this.users = users.data;
      } else {
        this.authService.logout();
      }
    });
  }

  loadMoreUsers(): void {
    // Implement the logic to load more users
    this.currentPage++;
    // Dispatch action or call service
  }

  deleteUser(userId: number): void {
    // Implement deletion logic
  }

  viewUser(userId: number): void {
    this.store.select(selectUserById(userId), take(1)).subscribe(user => {
      console.log(user);
    });
  }

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.handleDialogResult(user, result);
      }
    });
  }

  private handleDialogResult(user: User | undefined, result: any): void {
    if (user) {
      this.store.dispatch(new EditUser(user.id, result));
    } else {
      this.store.dispatch(new CreateUser(result));
    }
  }

  createUser(): void {
    this.openDialog();
  }

  editUser(user: User): void {
    this.openDialog(user);
  }
}

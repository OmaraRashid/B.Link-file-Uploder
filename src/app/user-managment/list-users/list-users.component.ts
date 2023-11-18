// list-users.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../user-managment.service';
import { User } from '../../core/model/user.details.model';
import { AppState } from 'src/redux/reducers';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectUserById } from 'src/redux/selectors/user-details.selectors';
import { take } from 'rxjs';
import { CreateUser, EditUser } from 'src/redux/actions/user-details.actions';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../edit-create-user/edit-create-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  currentPage: number = 1;
  isLastPage: boolean = false;

  constructor(private store: Store<AppState>,private dialog: MatDialog ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    console.log("hello");
    // Check if we're at the bottom of the element
    if (event.target.offsetWidth + event.target.scrollLeft >= event.target.scrollWidth) {
      if (!this.isLastPage) {
        this.loadMoreUsers();
      }
    }
  }

  loadUsers(): void {
   this.store.select(selectAllUsers,take(1)).subscribe((users) =>   this.users = users?.data || []);
  }

  loadMoreUsers(): void {
    this.currentPage++;
    // this.store.dispatch(new loadUsers(this.users));
    // this.userService.getUsers(this.currentPage).subscribe(response => {
    //   this.users = this.users.concat(response.data);
    //   this.isLastPage = this.currentPage === response.total_pages;
    // });
  }



  deleteUser(userId: number) {
    // Logic to delete the user
  }

  viewUser(userId: number) {
    const userSelector = selectUserById(userId);
    this.store.select(userSelector).pipe(take(1)).subscribe((user) => {
        console.log(user);
    });
}

  openDialog(user?: any): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (user) {
          this.store.dispatch (new EditUser(user,result));
        } else {
          this.store.dispatch (new CreateUser(result));
        }
      }
    });
  }

  createUser() {
    this.openDialog();
  }

  editUser(user: any) {
    this.openDialog(user);
  }
}

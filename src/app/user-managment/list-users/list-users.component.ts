// list-users.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../user-managment.service';
import { User } from '../../core/model/user.details.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  currentPage: number = 1;
  isLastPage: boolean = false;

  constructor(private userService: UserService) {}

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
    this.userService.getUsers(this.currentPage).subscribe(response => {
        console.log(response.data);
      this.users = response.data;
      this.isLastPage = this.currentPage === response.total_pages;
    });
  }

  loadMoreUsers(): void {
    this.currentPage++;
    this.userService.getUsers(this.currentPage).subscribe(response => {
      this.users = this.users.concat(response.data);
      this.isLastPage = this.currentPage === response.total_pages;
    });
  }

  editUser(userId: number) {
    // Logic to edit the user
  }

  deleteUser(userId: number) {
    // Logic to delete the user
  }

  viewUser(userId: number) {
    // Logic to view the user's details
  }
}

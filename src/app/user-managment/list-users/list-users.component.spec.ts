import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { ListUsersComponent } from './list-users.component';
import { selectAllUsers, selectUserById } from 'src/redux/selectors/user-details.selectors';
import { User } from '../../core/model/user.details.model';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let store: Store;
  let mockUsers: User[];

  beforeEach(async () => {
    // Prepare mock data
    mockUsers = [
        { 
          id: 7, 
          email: "michael.lawson@reqres.in", 
          first_name: "Michael", 
          last_name: "Lawson", 
          avatar: "https://reqres.in/img/faces/7-image.jpg" 
        },
      ];
      

    await TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
      imports: [
        StoreModule.forRoot({}),
        MatDialogModule
      ],
      providers: [
      ]
    }).compileComponents();

    store = TestBed.inject(Store);

    spyOn(store, 'select').and.callFake((selector: any) => {
      if (selector === selectAllUsers) {
        return of({ data: mockUsers });
      } else if (typeof selector === 'function') {
        // Mocking selectUserById
        return of(mockUsers[0]); // Adjust as needed
      }
      return of();
    });

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    component.ngOnInit();
    expect(component.users.length).toBeGreaterThan(0);
  });


  it('should load more users', () => {
    // Mock the initial state
    component.users = mockUsers;
    component.loadMoreUsers();
    expect(component.currentPage).toBe(2);
  });


});

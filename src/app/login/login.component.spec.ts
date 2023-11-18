import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { selectAllUsers } from 'src/redux/selectors/user-details.selectors';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({})
      ],
      providers: [
      ]
    })
    .compileComponents();

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('username')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('username and password fields validity', () => {
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];

    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();

    // Trigger the validation
    username.setValue("testuser");
    password.setValue("123456");

    expect(username.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
  });

  it('should dispatch login action when form is valid and submitted', () => {
    component.loginForm.controls['username'].setValue('testuser');
    component.loginForm.controls['password'].setValue('123456');

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalled();

  });
});

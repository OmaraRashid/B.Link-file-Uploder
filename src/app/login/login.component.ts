import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { LoginRequest } from 'src/redux/actions/auth.actions';
import { AppState } from 'src/redux/reducers';
import { selectAllUsers } from 'src/redux/selectors/user-details.selectors';
import { AuthService } from '../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // Add this inside LoginComponent

onSubmit(): void {
  if (this.loginForm.valid) {
    this.store.dispatch(new LoginRequest(this.loginForm.value));
  }
}

}

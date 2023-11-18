import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavigationComponent implements OnInit {

  constructor( public AuthService:AuthService) { }

  ngOnInit(): void {
  }

}

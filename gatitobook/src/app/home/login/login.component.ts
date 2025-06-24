import { Component, Input, OnInit } from '@angular/core';
import loginAuthentication from '../../types/loginAuthentication';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @Input()
  loginAuth: loginAuthentication = {
    user: '',
    password: '',
  };

  user: string = '';
  password: string = '';

  constructor() {}
  ngOnInit(): void {}

  login() {
    console.log(this.loginAuth.user);
    console.log(this.loginAuth.password);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  password = '';

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.auth.authenticate(this.usuario, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (err) => {
        alert('usuario ou senha inválido');
        console.log(err);
      }
    );
  }
}

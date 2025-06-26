import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient, private route: Router) {}

  registerNewUser(newUser: NewUser) {
    return this.http.post('http://localhost:300/user/signup', newUser);
  }

  userExistenceCheck(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}

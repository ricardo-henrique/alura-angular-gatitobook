import { Injectable } from '@angular/core';
import { NewUserService } from './new-user.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistService {
  constructor(private newUserService: NewUserService) {}

  userAlreadyExists() {
    return (controll: AbstractControl) => {
      return controll.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.userExistenceCheck(userName)
        ),
        map((userExists) => (userExists ? { existingUser: true } : null)),
        first()
      );
    };
  }
}

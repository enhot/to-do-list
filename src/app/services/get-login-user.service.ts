import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { RegisterUserService } from './register-user.service';

@Injectable({
  providedIn: 'root',
})
export class GetLoginUserService {
  public isLogInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLogIn$ = this.isLogInSubject.asObservable();

  constructor(
    private router: Router,
    private registerUserService: RegisterUserService
  ) {}
  private autoSignAut() {
    localStorage.getItem('isLogin') === 'true';
  }

  public checkUser(login: string, password: any): void {
    this.registerUserService.getUserData().subscribe((users) => {
      let user = users.find(
        (e) =>
          e.loginFormControl === login && e.passwordFormControl === password
      );
      if (user) {
        this.setLoggedIn();
      } else {
        console.log('Invalid credentials');
        this.setLoggedOut();
      }
    });
  }

  public setLoggedIn(): void {
    this.isLogInSubject.next(true);
    localStorage.setItem('isLogin', 'true');
    console.log('AuthService isTrue set to true');
    this.router.navigate(['/viewTask']);
  }
  public setLoggedOut(): void {
    this.isLogInSubject.next(false);
    localStorage.removeItem('isLogIn');
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RegisterUserService } from './register-user.service';

@Injectable({
  providedIn: 'root',
})
export class GetLoginUserService {
  public isLogInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLogIn$ = this.isLogInSubject.asObservable();
  public loginName = new BehaviorSubject<string | null>(null);
  constructor(
    private router: Router,
    private registerUserService: RegisterUserService
  ) {
    this.autoSignIn();
  }
  private autoSignIn(): void {
    const getLocalName = localStorage.getItem('loginName');
    if (getLocalName) {
      this.loginName.next(getLocalName);
    }
  }
  public checkUser(login: string, password: any): void {
    this.registerUserService.getUserData().subscribe((users) => {
      let user = users.find(
        (e) =>
          e.loginFormControl === login && e.passwordFormControl === password
      );
      if (user) {
        localStorage.setItem('loginName', login);
        this.loginName.next(login);
        this.setLoggedIn();
      } else {
        console.log('Invalid credentials');
        this.setLoggedOut();
      }
    });
  }

  public getLoginName() {
    return this.loginName.asObservable();
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

import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { GetLoginUserService } from '../services/get-login-user.service';
import { RegisterUserService } from '../services/register-user.service';

export const loginUserGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | boolean | UrlTree => {
  const router = inject(Router);
  const authUserService = inject(GetLoginUserService);

  const isLoggedIn = localStorage.getItem('isLogIn') === 'true';
  return authUserService.isLogIn$.pipe(
    map((isLogIn) => {
      if (isLogIn === isLoggedIn) {
        return true;
      } else {
        return router.createUrlTree(['/']);
      }
    })
  );

  /*return getRegisterUser.getUserData().pipe(
    map((users) => {
      let userExists = users.some(
        (user) =>
          user.loginFormControl ===
            authUserService.loginForm.get('loginFormControl')?.value &&
          user.passwordFormControl ===
            authUserService.loginForm.get('passwordFormControl')?.value
      );
      if (userExists && authUserService.isLogIn$) {
        return true;
      }
      return router.createUrlTree(['/']);
    }),
    catchError((error) => {
      console.error('Auth Guard Error:', error);
      return of(router.createUrlTree(['/']));
    })
  );*/
};

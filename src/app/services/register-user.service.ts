import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterForm } from '../interfaces/register-form';
import { RegisterUserFormService } from './register-user-form.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  public urlLoginServer: string = 'http://localhost:4000/registrations';
  public userDataBase$: BehaviorSubject<RegisterForm[]> = new BehaviorSubject<
    RegisterForm[]
  >([]);
  constructor(
    private http: HttpClient,
    private regisetForm: RegisterUserFormService
  ) {
    this.fetchUserData();
  }

  public sendUserData(): void {
    this.http
      .post<RegisterForm[]>(
        this.urlLoginServer,
        this.regisetForm.registerForm.value
      )
      .subscribe();
  }

  private fetchUserData(): void {
    this.http.get<RegisterForm[]>(this.urlLoginServer).subscribe({
      next: (data) => this.userDataBase$.next(data),
    });
  }

  public getUserData(): Observable<RegisterForm[]> {
    return this.userDataBase$.asObservable();
  }
}

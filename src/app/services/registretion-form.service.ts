import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { RegisterForm } from '../interfaces/register-form';

@Injectable({
  providedIn: 'root',
})
export class RegistretionFormService {
  private registerUrl: string = 'http://localhost:3001/registrations';
  public registerForm!: FormGroup;

  public registerFormData$: BehaviorSubject<RegisterForm[]> =
    new BehaviorSubject<RegisterForm[]>([]);

  constructor(private http: HttpClient) {
    this.registerForm = new FormGroup({
      loginFormControl: new FormControl('', [Validators.required]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [Validators.required]),
    });
    //get запрос
    this.fetchRegisterData();
  }
  private fetchRegisterData(): void {
    this.http.get<RegisterForm[]>(this.registerUrl).subscribe({
      next: (data) => this.registerFormData$.next(data),
    });
  }

  public sendRegisterData(): Observable<RegisterForm> {
    return this.http
      .post<RegisterForm>(this.registerUrl, this.registerForm.value)
      .pipe(
        tap((newData) => {
          const currentData = this.registerFormData$.getValue();
          this.registerFormData$.next([...currentData, newData]);
        })
      );
  }

  public getRegisterData(): Observable<RegisterForm[]> {
    return this.registerFormData$.asObservable();
  }
}

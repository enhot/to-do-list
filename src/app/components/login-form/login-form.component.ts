import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GetLoginUserService } from '../../services/get-login-user.service';
import { RegisterUserService } from '../../services/register-user.service';
import { RegisterForm } from '../../interfaces/register-form';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  providers: [HttpClientModule, GetLoginUserService, RegisterUserService],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  public getUserData: RegisterForm[] = [];
  private subscriptions: Subscription = new Subscription();
  constructor(
    private signInService: GetLoginUserService,
    private registerUserServer: RegisterUserService
  ) {
    this.loginForm = new FormGroup({
      loginFormControl: new FormControl('', [Validators.required]),
      passwordFormControl: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const userSubscription = this.registerUserServer
      .getUserData()
      .subscribe((users) => {
        if (users.length > 0) {
          this.getUserData = users;
        }
      });
    this.subscriptions.add(userSubscription);
  }

  public signIn(): void {
    let login = this.loginForm.get('loginFormControl')?.value;
    let password = this.loginForm.get('passwordFormControl')?.value;
    if (this.loginForm.valid) {
      this.signInService.checkUser(login, password);
      this.signInService.loginName.next(login);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

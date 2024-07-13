import { Component } from '@angular/core';
import { RegisterFromComponent } from '../../components/register-from/register-from.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterUserFormService } from '../../services/register-user-form.service';
import { RegisterUserService } from '../../services/register-user.service';
import { GetLoginUserService } from '../../services/get-login-user.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RegisterFromComponent,
    LoginFormComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [
    RegisterUserFormService,
    RegisterUserService,
    GetLoginUserService,
  ],
})
export class SignInComponent {
  public showLoginForm: boolean = false; // Добавлено состояние для управления формой входа

  public toggleLogin(): void {
    this.showLoginForm = !this.showLoginForm;
  }
}

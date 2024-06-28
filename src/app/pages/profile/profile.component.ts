import { Component } from '@angular/core';
import { RegisterFromComponent } from '../../components/register-from/register-from.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterUserFormService } from '../../services/register-user-form.service';
import { RegisterUserService } from '../../services/register-user.service';
import { GetLoginUserService } from '../../services/get-login-user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RegisterFromComponent,
    LoginFormComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [
    RegisterUserFormService,
    RegisterUserService,
    GetLoginUserService,
  ],
})
export class ProfileComponent {
  public showLoginForm: boolean = false; // Добавлено состояние для управления формой входа

  public toggleLogin(): void {
    this.showLoginForm = !this.showLoginForm;
  }
}

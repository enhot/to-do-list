import { Component } from '@angular/core';
import { RegisterFromComponent } from '../../components/register-from/register-from.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RegisterFromComponent, LoginFormComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public showLoginForm: boolean = false; // Добавлено состояние для управления формой входа

  public toggleLogin(): void {
    this.showLoginForm = !this.showLoginForm;
  }
}

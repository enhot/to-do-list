import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterUserFormService } from '../../services/register-user-form.service';
import { RegisterUserService } from '../../services/register-user.service';
@Component({
  selector: 'app-register-from',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './register-from.component.html',
  styleUrl: './register-from.component.scss',
  providers: [RegisterUserService, RegisterUserFormService],
})
export class RegisterFromComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private registUserForm: RegisterUserFormService,
    private registUserServer: RegisterUserService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.registUserForm.registerForm;
  }

  public sendFormRegister(): void {
    this.registUserServer.sendUserData();
    this.registerForm.reset();
  }
}

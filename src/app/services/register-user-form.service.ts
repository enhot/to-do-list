import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserFormService {
  public registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      loginFormControl: new FormControl('', [Validators.required]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [Validators.required]),
    });
  }
}

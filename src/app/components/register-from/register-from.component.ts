import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistretionFormService } from '../../services/registretion-form.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  providers: [RegistretionFormService],
})
export class RegisterFromComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(public registerFormData: RegistretionFormService) {}
  ngOnInit(): void {
    this.registerForm = this.registerFormData.registerForm;
  }

  public sendFormRegister(): void {
    this.registerFormData.sendRegisterData().subscribe({
      next: () => {
        this.registerForm.reset();
      },
      error: (err) => {
        console.error('Error submitting registration form:', err);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import 'moment/locale/ru';
import { ProjectFormService } from '../../services/project-form-service.service';
import { TaskListInterface } from '../../interfaces/task-list-interface';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-project-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    HttpClientModule,
  ],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ua' },
    provideNativeDateAdapter(),
    SendProjectFormService,
    ProjectFormService,
  ],
})
export class AddProjectFormComponent implements OnInit {
  public taskGroup!: FormGroup;

  constructor(
    private projectForm: ProjectFormService,
    private sendProjectForm: SendProjectFormService
  ) {}
  ngOnInit(): void {
    this.taskGroup = this.projectForm.taskGroup;
  }

  public get taskList(): TaskListInterface[] {
    return this.projectForm.taskList;
  }

  //Отчищаю форму
  public submitForm(): void {
    if (this.taskGroup.value) {
      this.sendProjectForm.sendTaskForm();
      this.taskGroup.reset();
    }
  }
  //Отчищаю поле инпут при клики на крестик
  public clearProjectName(): void {
    this.taskGroup.get('projectName')?.setValue('');
  }
}

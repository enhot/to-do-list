import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { TaskListInterface } from '../../interfaces/task-list-interface';
import { ProjectFormService } from '../../services/project-form-service.service';
import { BgTaskFormDirective } from '../../directive/bg-task-form.directive';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SendProjectFormService } from '../../services/send-project-form.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-task-group',
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    BgTaskFormDirective,
    HttpClientModule,
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.scss',
  providers: [ProjectFormService, SendProjectFormService],
})
export class TaskGroupComponent {
  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'determinate';
  value = 10;

  constructor(private taskForm: ProjectFormService) {}

  public get taskList(): TaskListInterface[] {
    return this.taskForm.taskList;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}

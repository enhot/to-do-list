import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProjectFormService } from '../../../../../services/project-form-service.service';
import { TaskListInterface } from '../../../../../interfaces/task-list-interface';
import { SendProjectFormService } from '../../../../../services/send-project-form.service';
import { filter, map } from 'rxjs';
import { ServerTaskForm } from '../../../../../interfaces/server-task-form';

@Component({
  selector: 'app-case-task',
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './case-task.component.html',
  styleUrl: './case-task.component.scss',
  providers: [SendProjectFormService],
})
export class CaseTaskComponent implements OnInit {
  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'determinate';
  value: number = 10;
  public tasksCase: ServerTaskForm[] = []; // Замените на ваш тип данных ServerTaskForm
  constructor(private getProjectTasks: SendProjectFormService) {}
  ngOnInit(): void {
    this.getProjectTasks
      .getTaskForm()

      .subscribe((filteredCase) => {
        if (filteredCase.length > 0) {
          this.tasksCase = filteredCase.filter(
            (e) => e.selectTaskGroup === 'Case'
          );
          console.log(this.tasksCase);
        }
      });
  }
}

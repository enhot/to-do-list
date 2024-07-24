import { Component, inject, OnInit } from '@angular/core';
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
import { CommonModule, SlicePipe } from '@angular/common';
import { SendProjectFormService } from '../../services/send-project-form.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { count, map } from 'rxjs';
import { TaskAmountService } from '../../services/task-amount.service';
import { TaskSpinerService } from '../../services/task-spiner.service';
import { ServerTaskForm } from '../../interfaces/server-task-form';

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
    SlicePipe,
  ],
  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.scss',
  providers: [SendProjectFormService, TaskAmountService],
})
export class TaskGroupComponent implements OnInit {
  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'determinate';
  public spinnerValue = 0; // значения для Spinner
  public taskCount: { [key: string]: number } = {};
  public taskProgress: { [key: string]: number } = {};
  public isLoading = true; // для отслеживания загрузки

  constructor(
    private taskForm: ProjectFormService,
    private getTaskAmount: TaskAmountService,
    private taskSpiner: TaskSpinerService,
    private sendProjectFormService: SendProjectFormService
  ) {}
  public ngOnInit(): void {
    this.getTaskAmount.taskCount$.subscribe((taskCount) => {
      this.taskCount = taskCount;
      this.isLoading = false;
      console.log(this.taskCount);
    });
    this.calculateSpiner();
  }

  public get taskList(): TaskListInterface[] {
    //получаю таск с формы
    return this.taskForm.taskList;
  }

  public calculateSpiner(): void {
    //получаем с сервера задачи
    this.sendProjectFormService
      .getTaskForm()
      .subscribe((tasks: ServerTaskForm[]) => {
        this.taskList.forEach((item) => {
          //если задач больше чем 0 то выполняем
          if (this.taskCount[item.task] > 0) {
            this.taskProgress[item.task] =
              this.taskSpiner.calculateGroupProgress(tasks, item.task);
          }
        });
      });
  }
}

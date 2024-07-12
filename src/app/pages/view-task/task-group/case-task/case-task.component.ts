import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { tap } from 'rxjs';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { SendProjectFormService } from '../../../../services/send-project-form.service';
import { TaskGroupService } from '../../../../services/task-group.service';

@Component({
  selector: 'app-case-task',
  standalone: true,
  imports: [FormsModule, DatePipe, CommonModule, SlicePipe],
  templateUrl: './case-task.component.html',
  styleUrl: './case-task.component.scss',
  providers: [SendProjectFormService, TaskGroupService],
})
export class CaseTaskComponent implements OnInit {
  public isShow: boolean[] = [];
  public tasksCase: ServerTaskForm[] = [];
  constructor(
    private getProjectTasks: SendProjectFormService,
    private getTaskGroup: TaskGroupService
  ) {}
  ngOnInit(): void {
    this.getTaskGroup.getTaskData('Case');
    this.getTaskGroup.taskName
      .asObservable()
      .subscribe({ next: (e) => (this.tasksCase = e) });
  }

  public deleteTask(id: number) {
    this.getTaskGroup.deleteTask(this.tasksCase, id);
  }

  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }
}

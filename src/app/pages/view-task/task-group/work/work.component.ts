import { Component } from '@angular/core';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { TaskGroupService } from '../../../../services/task-group.service';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [SlicePipe, DatePipe],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  public tasksWork: ServerTaskForm[] = [];
  public isShow: boolean[] = [];
  constructor(private getTaskGroup: TaskGroupService) {
    getTaskGroup.getTaskData('Daily Work');
    getTaskGroup.taskName.asObservable().subscribe((e) => {
      this.tasksWork = e;
    });
  }
  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }

  public deleteTask(id: number): void {
    this.getTaskGroup.deleteTask(this.tasksWork, id);
  }
}

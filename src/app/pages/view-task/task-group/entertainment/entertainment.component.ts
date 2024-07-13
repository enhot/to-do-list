import { Component } from '@angular/core';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { TaskGroupService } from '../../../../services/task-group.service';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [SlicePipe, DatePipe],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss',
  providers: [TaskGroupService],
})
export class EntertainmentComponent {
  public tasksEntertainment: ServerTaskForm[] = [];
  public isShow: boolean[] = [];
  constructor(private getTaskGroup: TaskGroupService) {
    getTaskGroup.getTaskData('Daily Work');
    getTaskGroup.taskName.asObservable().subscribe((e) => {
      this.tasksEntertainment = e;
    });
  }
  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }

  public deleteTask(id: number): void {
    this.getTaskGroup.deleteTask(this.tasksEntertainment, id);
  }
}

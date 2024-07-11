import { Component } from '@angular/core';
import { TaskGroupService } from '../../../../services/task-group.service';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-dalily-work',
  standalone: true,
  imports: [SlicePipe, DatePipe],
  templateUrl: './dalily-work.component.html',
  styleUrl: './dalily-work.component.scss',
  providers: [TaskGroupService],
})
export class DalilyWorkComponent {
  public tasksDailyWork: ServerTaskForm[] = [];
  public isShow: boolean[] = [];
  constructor(private getTaskGroup: TaskGroupService) {
    getTaskGroup.getTaskData('Daily Work');
    getTaskGroup.taskName.asObservable().subscribe((e) => {
      this.tasksDailyWork = e;
    });
  }
  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }

  public deleteTask(id: number): void {
    this.getTaskGroup.deleteTask(this.tasksDailyWork, id);
  }
}

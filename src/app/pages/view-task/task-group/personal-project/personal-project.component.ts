import { Component } from '@angular/core';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { TaskGroupService } from '../../../../services/task-group.service';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-personal-project',
  standalone: true,
  imports: [SlicePipe, DatePipe],
  templateUrl: './personal-project.component.html',
  styleUrl: './personal-project.component.scss',
  providers: [TaskGroupService],
})
export class PersonalProjectComponent {
  public tasksPersonal: ServerTaskForm[] = [];
  public isShow: boolean[] = [];
  constructor(private getTaskGroup: TaskGroupService) {
    getTaskGroup.getTaskData('Daily Work');
    getTaskGroup.taskName.asObservable().subscribe((e) => {
      this.tasksPersonal = e;
    });
  }
  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }

  public deleteTask(id: number): void {
    this.getTaskGroup.deleteTask(this.tasksPersonal, id);
  }
}

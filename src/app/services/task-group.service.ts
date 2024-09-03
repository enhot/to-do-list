import { Injectable } from '@angular/core';
import { SendProjectFormService } from './send-project-form.service';
import { ServerTaskForm } from '../interfaces/server-task-form';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskGroupService {
  public taskName: BehaviorSubject<ServerTaskForm[]> = new BehaviorSubject<
    ServerTaskForm[]
  >([]);
  constructor(private getProjectTasks: SendProjectFormService) {}

  public getTaskData(nameTask: string) {
    this.getProjectTasks.getTaskForm().subscribe((tasks) => {
      let task: ServerTaskForm[] = [];
      if (tasks.length > 0) {
        task = tasks.filter((task) => task.selectTaskGroup == nameTask);
      }
      this.taskName.next(task);
    });
  }

  public deleteTask(task: ServerTaskForm[], id: number): void {
    let taskDel = task[id];
    if (taskDel.id) {
      this.getProjectTasks
        .deleteWordById(taskDel.id)
        .pipe(tap(() => task.splice(id, 1)))
        .subscribe();
    }
  }
}

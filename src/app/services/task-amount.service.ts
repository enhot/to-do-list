import { Injectable } from '@angular/core';
import { SendProjectFormService } from './send-project-form.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskAmountService {
  public taskCountObject: BehaviorSubject<{ [key: string]: number }> =
    new BehaviorSubject<{ [key: string]: number }>({});
  public taskCount$ = this.taskCountObject.asObservable();

  constructor(private getTaskAmount: SendProjectFormService) {
    this.getTaskCounts();
  }

  public getTaskCounts(): void {
    this.getTaskAmount.getTaskForm().subscribe((tasks) => {
      const taskCount: { [key: string]: number } = {};

      tasks.forEach((task) => {
        if (task.projectName.length > 0) {
          //проверяем и добавляем или увеличиваем на один
          const group = task.selectTaskGroup;
          taskCount[group] ? taskCount[group]++ : (taskCount[group] = 1);
        }
      });
      this.taskCountObject.next(taskCount);
    });
  }
}

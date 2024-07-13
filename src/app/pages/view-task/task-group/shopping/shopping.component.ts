import { Component } from '@angular/core';
import { TaskGroupService } from '../../../../services/task-group.service';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [SlicePipe, DatePipe],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss',
  providers: [ServiceWorker],
})
export class ShoppingComponent {
  public tasksShopping: ServerTaskForm[] = [];
  public isShow: boolean[] = [];
  constructor(private getTaskGroup: TaskGroupService) {
    getTaskGroup.getTaskData('Daily Work');
    getTaskGroup.taskName.asObservable().subscribe((e) => {
      this.tasksShopping = e;
    });
  }
  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }

  public deleteTask(id: number): void {
    this.getTaskGroup.deleteTask(this.tasksShopping, id);
  }
}

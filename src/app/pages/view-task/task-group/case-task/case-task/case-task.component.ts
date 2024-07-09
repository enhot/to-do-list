import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SendProjectFormService } from '../../../../../services/send-project-form.service';
import { ServerTaskForm } from '../../../../../interfaces/server-task-form';
import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-case-task',
  standalone: true,
  imports: [FormsModule, DatePipe, CommonModule, SlicePipe],
  templateUrl: './case-task.component.html',
  styleUrl: './case-task.component.scss',
  providers: [SendProjectFormService],
})
export class CaseTaskComponent implements OnInit {
  public isShow: boolean[] = [];
  public tasksCase: ServerTaskForm[] = [];
  constructor(private getProjectTasks: SendProjectFormService) {}
  ngOnInit(): void {
    this.getProjectTasks.getTaskForm().subscribe((filteredCase) => {
      if (filteredCase.length > 0) {
        this.tasksCase = filteredCase.filter(
          (e) => e.selectTaskGroup === 'Case'
        );
      }
    });
  }

  deleteTask(id: number): void {
    let taskDel = this.tasksCase[id];
    if (taskDel.id) {
      this.getProjectTasks
        .deleteWordById(taskDel.id)
        .pipe(tap(() => this.tasksCase.splice(id, 1)))
        .subscribe();
    }
  }

  public showDiscription(id: number): void {
    this.isShow[id] = !this.isShow[id];
    console.log(this.isShow);
  }
}

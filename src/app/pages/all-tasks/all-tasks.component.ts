import { Component, OnInit } from '@angular/core';
import { ServerTaskForm } from '../../interfaces/server-task-form';
import { BehaviorSubject, Observable } from 'rxjs';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { CommonModule, DatePipe } from '@angular/common';
import { SortPipe } from '../../pipes/sort-pipe.pipe';
import { BgTaskFormDirective } from '../../directive/bg-task-form.directive';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [CommonModule, SortPipe, BgTaskFormDirective, DatePipe],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss',
})
export class AllTasksComponent implements OnInit {
  public allTasks$!: Observable<ServerTaskForm[]>;
  constructor(private takeAllTasks: SendProjectFormService) {}
  public ngOnInit(): void {
    this.allTasks$ = this.takeAllTasks.getTaskForm();
  }
}

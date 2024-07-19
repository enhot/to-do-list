import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GetLoginUserService } from '../../services/get-login-user.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Observer,
  of,
  pipe,
  Subject,
  Subscription,
} from 'rxjs';
import { TaskGroupService } from '../../services/task-group.service';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { CommonModule } from '@angular/common';
import { ServerTaskForm } from '../../interfaces/server-task-form';
import { SaveTasksCountService } from '../../services/save-tasks-count.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
  providers: [GetLoginUserService, LoginFormComponent, SendProjectFormService],
})
export class MyProfileComponent implements OnInit, OnDestroy {
  public loginName: string | null = '';
  public tasksInProgres: ServerTaskForm[] = [];
  public tasksUnsubscribe: Subscription[] = [];
  public count: number | null = 0;
  constructor(
    private getLOginName: GetLoginUserService,
    private taskGroup: SendProjectFormService,
    private saveTasksCount: SaveTasksCountService
  ) {}

  public ngOnInit(): void {
    this.takeLoginName();
    this.getTasksInProgres();
    this.saveAllTasksCount();
  }

  public takeLoginName(): void {
    const loginNameSubscription = this.getLOginName
      .getLoginName()
      .subscribe((e) => {
        this.loginName = e;
        console.log('Login', this.loginName);
      });
    this.tasksUnsubscribe.push(loginNameSubscription);
  }

  public getTasksInProgres(): void {
    const tasksGroupSubscription = this.taskGroup
      .getTaskForm()
      .subscribe((e) => (this.tasksInProgres = e));
    this.tasksUnsubscribe.push(tasksGroupSubscription);
  }

  public saveAllTasksCount(): void {
    const allTasksCountSubscription =
      this.saveTasksCount.allTasksCount.subscribe((count) => {
        this.count = count;
      });
    this.tasksUnsubscribe.push(allTasksCountSubscription);
  }

  public ngOnDestroy(): void {
    this.tasksUnsubscribe.forEach((e) => e.unsubscribe());
  }
}

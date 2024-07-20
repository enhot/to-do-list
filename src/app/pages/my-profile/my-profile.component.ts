import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GetLoginUserService } from '../../services/get-login-user.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Subscription } from 'rxjs';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { CommonModule } from '@angular/common';
import { ServerTaskForm } from '../../interfaces/server-task-form';

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
  constructor(
    private getLOginName: GetLoginUserService,
    private taskGroup: SendProjectFormService
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
      .subscribe((e) => {
        this.tasksInProgres = e;
      });
    this.tasksUnsubscribe.push(tasksGroupSubscription);
  }

  public saveAllTasksCount(): void {}

  public ngOnDestroy(): void {
    this.tasksUnsubscribe.forEach((e) => e.unsubscribe());
  }
}

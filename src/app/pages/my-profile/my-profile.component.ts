import { Component, inject, OnInit } from '@angular/core';
import { GetLoginUserService } from '../../services/get-login-user.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { TaskGroupService } from '../../services/task-group.service';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
  providers: [GetLoginUserService, LoginFormComponent],
})
export class MyProfileComponent implements OnInit {
  public loginName: string | null = '';
  public tasksInProgres: any;
  constructor(
    private getLOginName: GetLoginUserService,
    private taskGroup: SendProjectFormService
  ) {}

  public ngOnInit(): void {
    this.getLOginName.getLoginName().subscribe((e) => {
      this.loginName = e;
      console.log('Login', this.loginName);
    });
    this.taskGroup
      .getTaskForm()
      .subscribe({ next: (e) => (this.tasksInProgres = e) });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectFormService } from './project-form-service.service';

@Injectable({
  providedIn: 'root',
})
export class SendProjectFormService {
  public urlTaskForm: string = 'http://localhost:3000/taskList';

  constructor(
    private http: HttpClient,
    private projectForm: ProjectFormService
  ) {}

  public sendTaskForm() {
    this.http
      .post(this.urlTaskForm, this.projectForm.taskGroup.value)
      .subscribe();
  }
}

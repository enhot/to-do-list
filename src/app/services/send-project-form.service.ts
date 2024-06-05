import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectFormService } from './project-form-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServerTaskForm } from '../interfaces/server-task-form';

@Injectable({
  providedIn: 'root',
})
export class SendProjectFormService {
  public urlTaskForm: string = 'http://localhost:3000/taskList';
  public dataTaskForm$: BehaviorSubject<ServerTaskForm[]> = new BehaviorSubject<
    ServerTaskForm[]
  >([]);

  constructor(
    private http: HttpClient,
    private projectForm: ProjectFormService
  ) {
    this.fetchTaskForm();
  }

  public sendTaskForm() {
    this.http
      .post(this.urlTaskForm, this.projectForm.taskGroup.value)
      .subscribe();
  }
  private fetchTaskForm(): void {
    this.http.get<ServerTaskForm[]>(this.urlTaskForm).subscribe({
      next: (data) => this.dataTaskForm$.next(data),
    });
  }

  public getTaskForm(): Observable<ServerTaskForm[]> {
    return this.dataTaskForm$.asObservable();
  }
}

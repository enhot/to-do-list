import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskList } from '../class/task-list';

@Injectable({
  providedIn: 'root',
})
export class ProjectFormService {
  public taskList = new TaskList().taskList;

  public taskGroup: FormGroup;

  constructor() {
    this.taskGroup = new FormGroup({
      selectTaskGroup: new FormControl(''),
      projectName: new FormControl('', Validators.required),
      description: new FormControl(''),
      dateStart: new FormControl(''),
      dateEnd: new FormControl(''),
    });
  }
}

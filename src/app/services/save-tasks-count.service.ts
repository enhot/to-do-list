import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SendProjectFormService } from './send-project-form.service';

@Injectable({
  providedIn: 'root',
})
export class SaveTasksCountService {
  public allTasksCount: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  constructor(private sendProjectServ: SendProjectFormService) {
    // Подписываемся на общее количество задач за все время
    this.sendProjectServ.totalTaskCount$.subscribe((count) => {
      this.allTasksCount.next(count);
    });
  }
}

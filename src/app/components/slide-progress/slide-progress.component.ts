import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SlideOptionService } from '../../services/slide-progress.service';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { ServerTaskForm } from '../../interfaces/server-task-form';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// register Swiper custom elements
register();
@Component({
  selector: 'app-slide-progress',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule, HttpClientModule],
  templateUrl: './slide-progress.component.html',
  styleUrl: './slide-progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SlideOptionService, SendProjectFormService],
})
export class SlideProgressComponent implements OnInit {
  public inProgressList!: Observable<ServerTaskForm[]>;
  public getDates: { dateStart: Date; dateEnd: Date }[] = [];
  public valueProgress: number = 0;
  constructor(
    private slideOption: SlideOptionService,
    private getServerFormData: SendProjectFormService
  ) {}
  ngOnInit(): void {
    this.inProgressList = this.getServerFormData.getTaskForm();
    this.getServerFormData
      .getTaskForm()
      .pipe(
        map((tasks) => {
          tasks.forEach((task) => {
            if (task.dateStart && task.dateEnd) {
              this.getDates.push({
                dateStart: new Date(task.dateStart),
                dateEnd: new Date(task.dateEnd),
              });
            }
          });
          console.log('date my', this.getDates); // Лог для проверки добавленных данных
        })
      )
      .subscribe();
    this.slideOption.slidesOptions();
  }
  public calculateProgress(index: number): number {
    const startDate = this.getDates[index].dateStart.getTime();
    const endDate = this.getDates[index].dateEnd.getTime();
    const currentDate = new Date().getTime();

    const totalTime = endDate - startDate;
    const elapsedTime = currentDate - startDate;
    const progressPercentage = (elapsedTime / totalTime) * 100;
    console.log(`Task ${index}: ${progressPercentage}%`); // Лог для проверки прогресса каждой задачи
    return progressPercentage > 100 ? 100 : progressPercentage; // Ограничение процента прогресса до 100
  }
}

import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CalendareDatesService } from '../../services/calendare-dates.service';
import { CommonModule } from '@angular/common';
import { SlideProgressComponent } from '../../components/slide-progress/slide-progress.component';
import { map, Observable } from 'rxjs';
import { ServerTaskForm } from '../../interfaces/server-task-form';
import { SendProjectFormService } from '../../services/send-project-form.service';
// register Swiper custom elements
register();

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, SlideProgressComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarComponent implements OnInit {
  public dateForSlider: { month: string; day: number; week: string }[] = [];
  public allTasks: ServerTaskForm[] = [];
  public currentDate: any = new Date().getDate();
  public todayDate: Date = new Date();
  constructor(
    private calendarDates: CalendareDatesService,
    private sendProject: SendProjectFormService
  ) {}

  ngOnInit(): void {
    this.dateForSlider = this.calendarDates.dateSlides;
    this.sendProject.getTaskForm().subscribe({
      next: (tasks) => {
        // Ищем задачи, у которых дата окончания совпадает с текущим днем
        const matchingTasks = tasks.filter(
          (task) =>
            new Date(task.dateEnd).getDate() >= this.currentDate &&
            new Date(task.dateStart).getDate() <= this.currentDate
        );

        if (matchingTasks.length > 0) {
          this.allTasks = matchingTasks;
          console.log(this.allTasks);
        }
      },
    });
  }
}

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
import { Observable } from 'rxjs';
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
  constructor(
    private slideOption: SlideOptionService,
    private getServerFormData: SendProjectFormService
  ) {}
  ngOnInit(): void {
    this.inProgressList = this.getServerFormData.getTaskForm();

    this.slideOption.slidesOptions();
  }
}

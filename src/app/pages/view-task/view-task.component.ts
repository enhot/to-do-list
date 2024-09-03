import { Component, OnInit, TemplateRef } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import {
  ProgressSpinnerMode,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DecimalPipe, NgTemplateOutlet } from '@angular/common';
import { SlideProgressComponent } from '../../components/slide-progress/slide-progress.component';
import { TaskGroupComponent } from '../../components/task-group/task-group.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { map } from 'rxjs';
import { ServerTaskForm } from '../../interfaces/server-task-form';
import { TaskSpinerService } from '../../services/task-spiner.service';

@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    CommonModule,
    SlideProgressComponent,
    TaskGroupComponent,
    HttpClientModule,
    RouterLink,
    DecimalPipe,
    RouterOutlet,
  ],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss',
})
export class ViewTaskComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  constructor(
    private taskSpiner: TaskSpinerService,
    private sendProjectFormService: SendProjectFormService
  ) {}
  ngOnInit(): void {
    this.calculateDateSpiner();
  }
  public calculateDateSpiner(): void {
    this.sendProjectFormService
      .getTaskForm()
      .pipe(
        map((tasks: ServerTaskForm[]) =>
          this.taskSpiner.calculateOverallProgress(tasks)
        )
      )
      .subscribe((progress: number) => {
        this.value = progress;
      });
  }
}

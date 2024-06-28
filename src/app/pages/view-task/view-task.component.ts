import { Component, OnInit } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import {
  ProgressSpinnerMode,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SlideProgressComponent } from '../../components/slide-progress/slide-progress.component';
import { TaskGroupComponent } from '../../components/task-group/task-group.component';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss',
})
export class ViewTaskComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;
  constructor() {}
  ngOnInit(): void {}
}

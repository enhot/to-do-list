import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-task-group',
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.scss',
})
export class TaskGroupComponent {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;
}

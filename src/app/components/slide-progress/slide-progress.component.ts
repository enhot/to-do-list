import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SlideOptionService } from '../../services/slide-progress.service';
// register Swiper custom elements
register();
@Component({
  selector: 'app-slide-progress',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './slide-progress.component.html',
  styleUrl: './slide-progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SlideOptionService],
})
export class SlideProgressComponent implements OnInit {
  constructor(private slideOption: SlideOptionService) {}
  ngOnInit(): void {
    this.slideOption.slidesOptions();
  }
}

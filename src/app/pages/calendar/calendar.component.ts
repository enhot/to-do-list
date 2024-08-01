import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CalendareDatesService } from '../../services/calendare-dates.service';
import { CommonModule } from '@angular/common';
// register Swiper custom elements
register();

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarComponent implements OnInit {
  public dateForSlider: { month: string; day: number; week: string }[] = [];
  public currentDat: number = new Date().getDate();
  constructor(private calendarDates: CalendareDatesService) {}

  ngOnInit(): void {
    this.dateForSlider = this.calendarDates.dateSlides;
  }
}

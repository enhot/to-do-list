import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendareDatesService {
  public dateSlides: { month: string; day: number; week: string }[] = [];

  constructor() {
    const curDate = new Date();
    this.dateSlides = Array(7)
      .fill(null)
      .map((_, id) => {
        const date = new Date(curDate);
        date.setDate(curDate.getDate() + id);

        return {
          month: this.getMonth(date),
          day: date.getDate(),
          week: this.getWeekDay(date),
        };
      });
  }
  public getWeekDay(date: Date): string {
    let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }
  public getMonth(date: Date): string {
    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return month[date.getMonth()];
  }
}

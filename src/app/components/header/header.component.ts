import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public hidden = false;
  public countNotification: number = 0;
  public allDateEnd: Date[] = [];
  constructor(private getProjectFormService: SendProjectFormService) {}
  public ngOnInit(): void {
    this.getProjectFormService
      .getTaskForm()
      .pipe(
        map((dates) => {
          this.allDateEnd = []; // Очищаем массив перед добавлением новых данных

          dates.forEach((e) => {
            let nowDate = new Date();
            let lastDate = new Date(e.dateEnd);
            // добавляем только даты более рание или нынешнии

            if (nowDate >= lastDate) {
              this.allDateEnd.push(lastDate);
            }
          });

          this.countNotification = this.allDateEnd.length;
          console.log('my date', this.allDateEnd);
        })
      )
      .subscribe();

    this.countDateEnd();
  }
  public countDateEnd(): void {
    let dateEndArr: any = [];
    this.allDateEnd.forEach((e) => {
      if (new Date(e).getDate() >= new Date().getDate()) {
        dateEndArr.push(new Date(e).getDate());
        console.log('arr date', new Date(dateEndArr[0]).getDate());
      }
    });
  }
  public toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

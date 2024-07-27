import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SendProjectFormService } from '../../services/send-project-form.service';
import { map } from 'rxjs';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DialogHeaderComponent } from './dialog/dialog-header/dialog-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    HttpClientModule,
    DialogModule,
    DialogHeaderComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public hidden = false;
  public countNotification: number = 0;
  public allDateEnd: Date[] = [];
  constructor(
    private getProjectFormService: SendProjectFormService,
    public dialog: Dialog
  ) {}
  public ngOnInit(): void {
    this.countDateEnd();
  }

  openDialog() {
    this.dialog.open(DialogHeaderComponent, {
      width: '80%',
      height: 'auto',
      data: {
        date: this.allDateEnd,
      },
    });
  }

  public countDateEnd(): void {
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
  }
  public toggleBadgeVisibility() {
    this.hidden = true;
  }
}

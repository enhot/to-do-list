import { Injectable } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DialogHeaderComponent } from '../components/header/dialog/dialog-header/dialog-header.component';
import { SendProjectFormService } from './send-project-form.service';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public allDateEnd: Date[] = [];
  public countNotification: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public dialogRef!: DialogRef<DialogHeaderComponent, any>;

  constructor(
    public dialog: Dialog,
    private getProjectFormService: SendProjectFormService
  ) {
    this.countDateEnd();
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogHeaderComponent, {
      width: '80%',
      height: 'auto',
      data: {
        date: this.allDateEnd,
      },
    });
  }
  public closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
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

          this.countNotification.next(this.allDateEnd.length);
          console.log('my date', this.allDateEnd);
        })
      )
      .subscribe();
  }
}

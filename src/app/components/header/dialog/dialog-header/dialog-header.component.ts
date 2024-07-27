import { DIALOG_DATA, Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, Inject, OnInit, Output } from '@angular/core';
import { ServerTaskForm } from '../../../../interfaces/server-task-form';
import { SendProjectFormService } from '../../../../services/send-project-form.service';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-dialog-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss',
})
export class DialogHeaderComponent implements OnInit {
  public allTaskEnd: ServerTaskForm[] = [];
  public dateEndArray: Date[] = [];
  public dialogRef!: DialogRef<DialogHeaderComponent, any>;
  constructor(
    @Inject(DIALOG_DATA) public dateEnd: Date[],
    private getProjectFormService: SendProjectFormService
  ) {}

  public ngOnInit(): void {
    let getDateArr = Object.values(this.dateEnd);
    this.dateEndArray = getDateArr.flat();
    if (this.dateEndArray.length > 0) {
      this.getProjectFormService
        .getTaskForm()
        .pipe(
          map((tasks) => {
            this.allTaskEnd = []; // Очищаем массив перед добавлением новых данных

            tasks.forEach((task) => {
              let isDateEndPresent = this.dateEndArray.some((e) => {
                console.log(
                  'Comparing:',
                  new Date(e).getTime(),
                  new Date(task.dateEnd).getTime()
                );
                return (
                  new Date(e).getTime() === new Date(task.dateEnd).getTime()
                );
              });

              if (isDateEndPresent == true) {
                this.allTaskEnd.push(task);
              }
            });
            console.log('DIALOG', this.allTaskEnd);
          })
        )
        .subscribe();
    }
  }
  public closeDialog() {
    this.dialogRef.close();
  }
}

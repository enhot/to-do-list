import { Component, OnInit, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepickerModule,
  MatDatepickerIntl,
} from '@angular/material/datepicker';
import {
  MAT_DATE_LOCALE,
  DateAdapter,
  provideNativeDateAdapter,
} from '@angular/material/core';
import * as moment from 'moment';
import 'moment/locale/ru';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [
    HeaderComponent,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    provideNativeDateAdapter(),
  ],
})
export class AddProjectComponent implements OnInit {
  public taskGroup: FormGroup;

  public taskList: string[] = [
    'Case',
    'Daily Work',
    'Work',
    'Entertainment',
    'Personal Project',
    'Shopping',
  ];

  public projectName: string = '';

  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl
  ) {
    this.taskGroup = new FormGroup({
      projectName: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  public ngOnInit(): void {
    this.loadRussianLocale();
    this._adapter.setLocale('ru');
    this.updateCloseButtonLabel('Закрыть календарь');
  }

  public loadRussianLocale() {
    moment.locale('ru');
  }

  updateCloseButtonLabel(label: string) {
    this._intl.closeCalendarLabel = label;
    this._intl.changes.next();
  }
}

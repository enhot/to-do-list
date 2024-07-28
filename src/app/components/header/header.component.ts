import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from '../../services/dialog.service';

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

  constructor(private dialogService: DialogService) {}
  public ngOnInit(): void {
    this.dialogService.countNotification.subscribe((e) => {
      this.countNotification = e;
    });
  }

  public openDialog() {
    this.dialogService.openDialog();
  }
  public toggleBadgeVisibility() {
    this.hidden = true;
  }
}

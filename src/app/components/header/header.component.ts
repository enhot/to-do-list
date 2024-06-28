import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
export class HeaderComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

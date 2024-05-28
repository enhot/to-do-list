import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouteService } from './services/track-route.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public currentRoute!: string;

  constructor(private trackRouteService: RouteService) {}
  ngOnInit(): void {
    this.trackRouteService.currentRoute$.subscribe(
      (data) => (this.currentRoute = data)
    );
  }

  shouldShowHeader(): boolean {
    return this.currentRoute !== '/';
  }

  shouldShowFooter(): boolean {
    return this.currentRoute !== '/addProject' && this.currentRoute !== '/';
  }
}

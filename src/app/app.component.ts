import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouteService } from './services/track-route.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public currentRoute!: string;

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    // Инициализация RouteService
    this.routeService.init();

    // Подписка на изменения текущего маршрута
    this.routeService.currentRoute$.subscribe((data) => {
      this.currentRoute = data;
      console.log('Current Route:', this.currentRoute); // Для отладки
    });
  }

  shouldShowHeader(): boolean {
    return this.currentRoute !== '/' && this.currentRoute !== '/signIn';
  }

  shouldShowFooter(): boolean {
    return (
      this.currentRoute !== '/addProject' &&
      this.currentRoute !== '/' &&
      this.currentRoute !== '/signIn'
    );
  }
}

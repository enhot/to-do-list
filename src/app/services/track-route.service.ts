import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouteService implements OnInit {
  private currentRoute: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  currentRoute$ = this.currentRoute.asObservable();

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.next(event.urlAfterRedirects);
      });
  }
}

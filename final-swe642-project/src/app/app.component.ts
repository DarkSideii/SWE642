import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-swe642-project';
  showHeaderFooter = true; // This will control the visibility

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Toggle the visibility based on the route
      this.showHeaderFooter = event.urlAfterRedirects !== '/survey-form';
    });
  }
}

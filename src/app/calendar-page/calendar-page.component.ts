import { Component, inject, OnInit } from '@angular/core';
import { CalendarEventInterface } from '../calendar-event-interface';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgxCalendarWidgetModule } from '@localia/ngx-calendar-widget';
import { CalendarModule } from '../calendar/calendar.module';
import { CalendarService } from '../calendar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-calendar-page',
  imports: [RouterOutlet, RouterLink, NgxCalendarWidgetModule, CalendarModule],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css',
})
export class CalendarPageComponent implements OnInit {
  calendarService = inject(CalendarService);
  authService = inject(AuthService);

  constructor(private router: Router) {}

  events: CalendarEventInterface[] = [];

  onAddEvent(date: string) {
    const dateString = date.toString().split('T')[0];
    this.router.navigate(['/add-event', dateString]);
  }
  onEventSelect(event: CalendarEventInterface) {
    this.router.navigate(['/event', event.id]);
  }

  ngOnInit(): void {
    this.calendarService.getEvents().subscribe((data) => {
      this.events = data.filter(
        (event) => event.userID === this.authService.getUser()?.uid
      );
    });
  }
}

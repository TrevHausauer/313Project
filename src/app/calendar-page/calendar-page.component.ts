import { Component } from '@angular/core';
import { CalendarEventInterface } from '../calendar-event-interface';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgxCalendarWidgetModule } from '@localia/ngx-calendar-widget';
import { CalendarModule } from '../calendar/calendar.module';

@Component({
  selector: 'app-calendar-page',
  imports: [RouterOutlet, RouterLink, NgxCalendarWidgetModule, CalendarModule],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css',
})
export class CalendarPageComponent {
  constructor(private router: Router) {}

  events: CalendarEventInterface[] = [
    {
      id: 1,
      title: 'Team Meeting',
      date: '2025-05-01T10:00:00',
      endDate: '2025-05-01T12:00:00',
    },
    {
      id: 2,
      title: 'Conference',
      date: '2025-05-05T09:00:00',
      endDate: '2025-05-07T17:00:00',
    },
  ];

  onAddEvent(date: string) {
    this.router.navigate(['/add-event']);
  }
  onEventSelect(event: CalendarEventInterface) {
    console.log('Event clicked:', event);
    // Implement your event handling logic here
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxCalendarWidgetModule } from '@localia/ngx-calendar-widget';
import { CalendarEventInterface } from './calendar-event-interface';
import { CalendarModule } from './calendar/calendar.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgxCalendarWidgetModule, CalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '313Project';
  events: CalendarEventInterface[] = [
    {
        id: 1,
        title: 'Team Meeting',
        date: '2023-10-01T10:00:00',
        endDate: '2023-10-01T12:00:00',
    },
    {
        id: 2,
        title: 'Conference',
        date: '2023-10-05T09:00:00',
        endDate: '2023-10-07T17:00:00',
    }
];

onAddEvent(date: string) {
    const newEvent: CalendarEventInterface = {
      id: Date.now(),
      title: 'New Event',
      date: date,
      endDate: date, // or calculate end time
    };
    this.events = [...this.events, newEvent];
  }

onEventSelect(event: CalendarEventInterface) {
    console.log('Event clicked:', event);
    // Implement your event handling logic here
}
}
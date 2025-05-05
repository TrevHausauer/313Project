import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, CalendarEvent, CalendarCommonModule } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule,
    CalendarCommonModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  
  viewDate: Date = new Date(2025, 4, 1);  // May 1st, 2025
  events: CalendarEvent[] = [
    {
      start: new Date(2025, 4, 1),  // May 1st, 2025
      title: 'Test Event'
    }
  ];
  
}

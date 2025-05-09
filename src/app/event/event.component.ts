import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarEventInterface } from '../calendar-event-interface';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-event',
  imports: [RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  calendarService = inject(CalendarService);

  eventID!: string;

  events: CalendarEventInterface[] = [];

  event: CalendarEventInterface = this.events.find(
    (event) => event.id.toString() === this.eventID.toString()
  ) || {
    id: '',
    userID: '',
    title: '',
    date: '',
    endDate: '',
    priority: '',
    description: '',
  };

  ngOnInit(): void {
    this.calendarService.getEvents().subscribe((data) => (this.events = data));
    this.eventID = this.route.snapshot.paramMap.get('id')!;
  }

  deleteEvent(event: CalendarEventInterface) {
    this.calendarService.deleteEvent(event);
  }

  markComplete(event: CalendarEventInterface, e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    event.completed = checked;
    this.calendarService.updateEvent(event);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarService } from '../calendar.service';
import { CalendarEventInterface } from '../calendar-event-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css',
})
export class EditEventComponent implements OnInit {
  calendarService = inject(CalendarService);

  id!: string;

  events: CalendarEventInterface[] = [];

  event: CalendarEventInterface = this.events.find(
    (event) => event.id.toString() === this.id.toString()
  ) || { id: '', title: '', date: '', endDate: '', priority: '', description: '', userID: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.calendarService.getEvents().subscribe((data) => (this.events = data));
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  updateEvent(event: CalendarEventInterface) {
    this.calendarService.updateEvent(event);
  }
}

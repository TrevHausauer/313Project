import { Component, inject, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarEventInterface } from '../calendar-event-interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css',
})
export class EditEventComponent implements OnInit {
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

  sDate!: string;
  sTime!: string;
  eDate!: string;
  eTime!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventID = this.route.snapshot.paramMap.get('id')!;
    this.calendarService.getEvents().subscribe((data) => {
      this.events = data;
      this.event = this.events.find(
        (event) => event.id.toString() === this.eventID
      )!;

      if (this.event) {
        this.sDate = this.event.date.split('T')[0];
        this.sTime = this.event.date.split('T')[1];
        this.eDate = this.event.endDate!.split('T')[0];
        this.eTime = this.event.endDate!.split('T')[1];
      }
    });
  }

  updateEvent(event: CalendarEventInterface) {
    const startDateTimeString = `${this.sDate}T${this.sTime}`;
    const endDateTimeString = `${this.eDate}T${this.eTime}`;
    this.event.date = startDateTimeString;
    this.event.endDate = endDateTimeString;
    this.calendarService.updateEvent(event);
  }
}

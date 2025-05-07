import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarEventInterface } from '../calendar-event-interface';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-add-event',
  imports: [RouterLink],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  date!: string;

  calendarService = inject(CalendarService);
  event: CalendarEventInterface = { id: '', title: '', date: '', endDate: '' };

  addEvent(sDate: string, eDate: string) {
    this.event.date = sDate;
    this.event.endDate = eDate;
    this.calendarService.addEvent(this.event);
    this.resetForm();
  }

  ngOnInit(): void {
    this.date = this.route.snapshot.paramMap.get('date')!;
  }

  resetForm() {
    this.event = {
      id: '',
      title: '',
      date: '',
      endDate: '',
    };
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarEventInterface } from '../calendar-event-interface';
import { CalendarService } from '../calendar.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-event',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  sDate: string = '';
  sTime: string = '';
  eDate: string = '';
  eTime: string = '';
  priority: string = '';
  title: string = '';
  description: string = '';

  calendarService = inject(CalendarService);
  authService = inject(AuthService);

  event: CalendarEventInterface = {
    id: '',
    title: '',
    date: '',
    endDate: '',
    priority: '',
    description: '',
    userID: '',
  };

  addEvent() {
    const startDateTimeString = `${this.sDate}T${this.sTime}`;
    const endDateTimeString = `${this.eDate}T${this.eTime}`;
    this.event.date = startDateTimeString;
    this.event.endDate = endDateTimeString;
    this.event.title = this.title;
    this.event.priority = this.priority;
    this.event.description = this.description;
    this.event.userID = this.authService.getUser()?.uid;
    this.calendarService.addEvent(this.event);
    this.resetForm();
  }

  ngOnInit(): void {
    this.sDate = this.route.snapshot.paramMap.get('date')!;
  }

  resetForm() {
    this.event = {
      id: '',
      title: '',
      date: '',
      endDate: '',
      priority: '',
      description: '',
      userID: '',
    };
  }
}

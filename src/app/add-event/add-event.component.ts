import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalendarEventInterface } from '../calendar-event-interface';

@Component({
  selector: 'app-add-event',
  imports: [RouterLink],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent {
  event: CalendarEventInterface = { id: '', title: '', date: '', endDate: '' };

  addEvent(sDate: string, eDate: string) {
    this.event.date = sDate;
    this.event.endDate = eDate;
    //this.noteSer.addNote(this.note);
    this.resetForm();
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

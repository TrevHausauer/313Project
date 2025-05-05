import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '313Project';

}
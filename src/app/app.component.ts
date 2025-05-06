import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalendarViewComponent } from "./calendar-view/calendar-view.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CalendarViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '313Project';
  
}
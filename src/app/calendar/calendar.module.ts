import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCalendarWidgetModule } from '@localia/ngx-calendar-widget';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxCalendarWidgetModule.forRoot()
  ]
})
export class CalendarModule { }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent, CalendarCommonModule, CalendarMonthModule, CalendarUtils, DateAdapter } from 'angular-calendar';

export class CustomDateAdapter extends DateAdapter {

  override addWeeks(date: Date | number, amount: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + (amount * 7)); // Add weeks as days
    return newDate;
  }

  override addMonths(date: Date | number, amount: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + amount); // Add months
    return newDate;
  }

  override subDays(date: Date | number, amount: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - amount); // Subtract days
    return newDate;
  }

  override subWeeks(date: Date | number, amount: number): Date {
    return this.addWeeks(date, -amount); // Subtract weeks
  }

  override subMonths(date: Date | number, amount: number): Date {
    return this.addMonths(date, -amount); // Subtract months
  }

  override getISOWeek(date: Date | number): number {
    const currentDate = new Date(date);
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    return Math.ceil((days + 1) / 7); // Calculate the ISO week number
  }

  override setDate(date: Date | number, dayOfMonth: number): Date {
    const newDate = new Date(date);
    newDate.setDate(dayOfMonth); // Set the day of the month
    return newDate;
  }

  override setMonth(date: Date | number, month: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(month); // Set the month
    return newDate;
  }

  override setYear(date: Date | number, year: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(year); // Set the year
    return newDate;
  }

  override getDate(date: Date | number): number {
    return new Date(date).getDate(); // Get the date (day of the month)
  }

  override getMonth(date: Date | number): number {
    return new Date(date).getMonth(); // Get the month (0-based)
  }

  override getYear(date: Date | number): number {
    return new Date(date).getFullYear(); // Get the full year
  }

  override addHours(date: Date | number, amount: number): Date {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + amount); // Add hours
    return newDate;
  }

  override addMinutes(date: Date | number, amount: number): Date {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + amount); // Add minutes
    return newDate;
  }

  override addSeconds(date: Date | number, amount: number): Date {
    const newDate = new Date(date);
    newDate.setSeconds(newDate.getSeconds() + amount); // Add seconds
    return newDate;
  }

  override differenceInDays(dateLeft: Date | number, dateRight: Date | number): number {
    const diffTime = Math.abs(new Date(dateLeft).getTime() - new Date(dateRight).getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
  }

  override differenceInMinutes(dateLeft: Date | number, dateRight: Date | number): number {
    const diffTime = Math.abs(new Date(dateLeft).getTime() - new Date(dateRight).getTime());
    return Math.floor(diffTime / (1000 * 60)); // Difference in minutes
  }

  override differenceInSeconds(dateLeft: Date | number, dateRight: Date | number): number {
    const diffTime = Math.abs(new Date(dateLeft).getTime() - new Date(dateRight).getTime());
    return Math.floor(diffTime / 1000); // Difference in seconds
  }

  override endOfDay(date: Date | number): Date {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999); // End of day
    return newDate;
  }

  override endOfMonth(date: Date | number): Date {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1, 0); // End of month
    newDate.setHours(23, 59, 59, 999);
    return newDate;
  }

  override getDay(date: Date | number): number {
    return new Date(date).getDay(); // Get the day of the week (0-6)
  }

  override isSameMonth(dateLeft: Date | number, dateRight: Date | number): boolean {
    return this.getYear(dateLeft) === this.getYear(dateRight) && 
           this.getMonth(dateLeft) === this.getMonth(dateRight);
  }

  override isSameSecond(dateLeft: Date | number, dateRight: Date | number): boolean {
    return dateLeft === dateRight;
  }

  override max(dates: (Date | number)[]): Date {
    return new Date(Math.max(...dates.map(date => new Date(date).getTime()))); // Return the max date
  }

  override setHours(date: Date | number, hours: number): Date {
    const newDate = new Date(date);
    newDate.setHours(hours); // Set the hours
    return newDate;
  }

  override setMinutes(date: Date | number, minutes: number): Date {
    const newDate = new Date(date);
    newDate.setMinutes(minutes); // Set the minutes
    return newDate;
  }

  override startOfDay(date: Date | number): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0); // Start of day
    return newDate;
  }

  override startOfMinute(date: Date | number): Date {
    const newDate = new Date(date);
    newDate.setSeconds(0, 0); // Start of minute
    return newDate;
  }

  override startOfMonth(date: Date | number): Date {
    const newDate = new Date(date);
    newDate.setDate(1); // Start of month
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  override getHours(date: Date | number): number {
    return new Date(date).getHours(); // Get hours
  }

  override getMinutes(date: Date | number): number {
    return new Date(date).getMinutes(); // Get minutes
  }

  override getTimezoneOffset(date: Date | number): number {
    return new Date(date).getTimezoneOffset(); // Get timezone offset
  }

  // Custom Methods
  startOfWeek(): Date {
    const date = new Date(); // directly use current date
    const dayOfWeek = date.getDay();
    date.setDate(date.getDate() - dayOfWeek);  // Move back to Sunday (or Monday based on locale)
    return date;
  }
  
  endOfWeek(): Date {
    const date = new Date(); // directly use current date
    const dayOfWeek = date.getDay();
    date.setDate(date.getDate() + (6 - dayOfWeek));  // Move forward to Saturday (or Sunday)
    return date;
  }

  toDate(): Date {
    return new Date(); // Default behavior, return current date
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() && 
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  getDayOfWeek(date: Date): number {
    return date.getDay(); // Return the day of the week (0-6)
  }

  format(date: Date): string {
    return date.toLocaleDateString(); // Simple date format
  }
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarCommonModule, 
    CalendarMonthModule
  ],
  providers:
  [ CalendarUtils,
    { provide: DateAdapter, useClass: CustomDateAdapter }
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

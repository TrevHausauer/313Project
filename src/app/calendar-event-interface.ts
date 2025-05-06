export interface CalendarEventInterface {
    id: number | string;     // Unique identifier for the event
    title: string;         // Event title to display on the calendar
    date: string;          // Start date/time in ISO format (YYYY-MM-DDTHH:mm:ss)
    endDate: string | null;  // End date/time in ISO format (optional)
}

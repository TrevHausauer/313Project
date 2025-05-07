import { inject, Injectable } from '@angular/core';
import { CalendarEventInterface } from './calendar-event-interface';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  private firestore = inject(Firestore);
  private eventCollection = collection(this.firestore, 'events');

  getEvents(): Observable<CalendarEventInterface[]> {
    return collectionData(this.eventCollection, { idField: 'id' }) as Observable<
      CalendarEventInterface[]
    >;
  }

  addNote(newEvent: CalendarEventInterface) {
    const eventRef = doc(this.eventCollection);
    const newId = eventRef.id;
    newEvent.id = newId;
    setDoc(eventRef, newEvent);
  }

  deleteEvent(event: CalendarEventInterface) {
    const eventRef = doc(this.firestore, `events/${event.id}`);
    deleteDoc(eventRef);
  }

  updateEvent(event: CalendarEventInterface) {
    const eventRef = doc(this.firestore, `events/${event.id}`);
    updateDoc(eventRef, { ...event });
  }
}

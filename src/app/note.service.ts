import { inject, Injectable } from '@angular/core';
import { Note } from '../models/note';
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
export class NoteService {
  constructor() {}

  private firestore = inject(Firestore);
  private noteCollection = collection(this.firestore, 'notes');

  getNotes(): Observable<Note[]> {
    return collectionData(this.noteCollection, { idField: 'id' }) as Observable<
      Note[]
    >;
  }

  addNote(newNote: Note) {
    const noteRef = doc(this.noteCollection);
    const newId = noteRef.id;
    newNote.id = newId;
    setDoc(noteRef, newNote);
  }

  deleteNote(note: Note) {
    const noteRef = doc(this.firestore, `notes/${note.id}`);
    deleteDoc(noteRef);
  }

  updateNote(note: Note) {
    const noteRef = doc(this.firestore, `notes/${note.id}`);
    updateDoc(noteRef, { ...note });
  }
}

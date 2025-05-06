import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteComponent } from './note/note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

export const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    title: 'Notes Component',
  },
  {
    path: 'add-note',
    component: AddNoteComponent,
    title: 'Add Notes Component',
  },
  {
    path: 'note/:id',
    component: NoteComponent,
    title: 'Note Component',
  },
  {
    path: 'note-edit/:id',
    component: EditNoteComponent,
    title: 'Edit Note Component',
  },
];

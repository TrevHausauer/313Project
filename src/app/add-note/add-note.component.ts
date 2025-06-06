import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';
import { Note } from '../../models/note';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-note',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent implements OnInit {
  noteService = inject(NoteService);
  authService = inject(AuthService);

  note: Note = { id: '', userId: '', title: '', content: '' };

  notes: Note[] = [];

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) => (this.notes = data));
  }

  addNote() {
    this.note.userId = this.authService.getUser()?.uid;
    this.noteService.addNote(this.note);
    this.resetForm();
  }

  resetForm() {
    this.note = {
      id: '',
      userId: '',
      title: '',
      content: '',
    };
  }
}

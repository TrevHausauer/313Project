import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../../models/note';
@Component({
  selector: 'app-notes',
  imports: [RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  noteService = inject(NoteService);

  note: Note = { id: '', userId: '', title: '', content: '' };

  notes: Note[] = [];

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) => (this.notes = data));
  }
}

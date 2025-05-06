import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note',
  imports: [RouterLink],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent implements OnInit {
  noteService = inject(NoteService);

  id!: string;

  notes: Note[] = [];

  note: Note = this.notes.find(
    (note) => note.id.toString() === this.id.toString()
  ) || { id: '', userId: '', title: 'Unknown', content: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) => (this.notes = data));
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note);
  }
}

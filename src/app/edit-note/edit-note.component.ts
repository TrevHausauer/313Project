import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../../models/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
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

  updateNote(note: Note) {
    this.noteService.updateNote(note);
  }
}

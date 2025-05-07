import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteComponent } from './note/note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddEventComponent } from './add-event/add-event.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

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
  {
    path: 'add-event/:date',
    component: AddEventComponent,
    title: 'Add Event Component',
  },
  {
    path: 'calendar-page',
    component: CalendarPageComponent,
    title: 'Calendar Component',
  },
];

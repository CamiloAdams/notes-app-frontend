import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/interfaces/note';
import { OpenNoteComponent } from './open-note/open-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { DateService } from 'src/app/services/date.service';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  filteredNotes: Note[] = [];
  mybreakpoint!: number;
  constructor(
    private router: Router,
    private _notesService: NotesService,
    private _snackBar: MatSnackBar,
    public dateService: DateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
    this.mybreakpoint = window.innerWidth <= 600 ? 1 : 4;
    this.getNotes();
  }

  getNotes() {
    this._notesService
      .getNotes()
      .then((response) => {
        this.notes = response.data;
        this.filteredNotes = response.data;
      })
      .catch((error) => {
        this._snackBar.open(error, '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      });
  }

  createNote() {
    this.dialog
      .open(CreateNoteComponent, {
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          window.location.reload();
        }
      });
  }

  openNote(id: string) {
    this.dialog.open(OpenNoteComponent, {
      data: this.findNote(id),
    });
  }

  updateNote(id: string) {
    this.dialog
      .open(UpdateNoteComponent, {
        data: this.findNote(id),
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          window.location.reload();
        }
      });
  }

  deleteNote(id: string) {
    this.dialog
      .open(DeleteNoteComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this._notesService
            .deleteNote(id)
            .then((res) => {
              this._snackBar.open('deleted', '', {
                duration: 1500,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
              });
              window.location.reload();
            })
            .catch((err) => {
              this._snackBar.open(err, '', {
                duration: 1500,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
              });
            });
        }
      });
  }

  findNote(id: string) {
    const NOTE = this.notes.find((note) => note._id === id);
    // if (!NOTE) throw new NotFoundException(`Car with id '${id}' not found.`);
    return NOTE;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredNotes = this.notes.filter((note) =>
      note.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  clearFilter() {
    this.filteredNotes = this.notes;
    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    searchBox.value = '';
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['home']);
  }

  handleSize(event: Event) {
    const target = event.target as Window;
    this.mybreakpoint = (target.innerWidth <= 600) ? 1 : 4;
  }
}

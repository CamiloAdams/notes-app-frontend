import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    private _notesService: NotesService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Note,
  ) {
    this.form = this.fb.group({
      title: [this.data.title, Validators.required],
      content: [this.data.content, Validators.required],
    });
  }
  save() {
    const data: Note = {
      _id: this.data._id,
      title: this.form.value.title,
      content: this.form.value.content,
    };
    this._notesService.updateNote(data).then((res) => {
      this.dialogRef.close('update');
    }).catch((error) => {
      this._snackBar.open(error, "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

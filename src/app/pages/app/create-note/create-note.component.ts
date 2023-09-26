import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Note } from "src/app/interfaces/note";
import { NotesService } from "src/app/services/notes.service";

@Component({
  selector: "app-create-note",
  templateUrl: "./create-note.component.html",
  styleUrls: ["./create-note.component.css"],
})
export class CreateNoteComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateNoteComponent>,
    private _notesService: NotesService,
    private _snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
    });
  }
  save() {
    const data: Note = {
      title: this.form.value.title,
      content: this.form.value.content,
    };
    this._notesService.createNote(data).then((res) => {
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

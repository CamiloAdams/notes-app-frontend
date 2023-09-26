import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatDialogModule
} from "@angular/material/dialog";
import { Note } from "src/app/interfaces/note";
import { DateService } from "src/app/services/date.service";

@Component({
  selector: "app-open-note",
  templateUrl: "./open-note.component.html",
  styleUrls: ["./open-note.component.css"],
})
export class OpenNoteComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OpenNoteComponent>,
    public dateService: DateService,
    @Inject(MAT_DIALOG_DATA) public data: Note,
  ) {
    this.form = this.fb.group({
      title: [this.data.title],
      content: [this.data.content],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

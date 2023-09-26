import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AutosizeModule } from "ngx-autosize";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    AutosizeModule,
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    AutosizeModule,
  ],
})
export class SharedModule {}

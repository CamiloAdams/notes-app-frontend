import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { OpenNoteComponent } from './open-note/open-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
    OpenNoteComponent,
    DeleteNoteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class AppModule { }

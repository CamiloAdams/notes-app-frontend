import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import axios from "axios";
import { Note } from "../interfaces/note";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  headers = {
    "Content-Type": "application/json",
    "x-access-token": localStorage.getItem("token") || "",
  };
  // private apiUrl = "http://localhost:3000/api/notes/";

  private apiUrl = "https://notesapp.website:3001/api/notes/";
  constructor(private http: HttpClient) {}

  getNotes() {
    return axios.get(this.apiUrl, {
      headers: this.headers,
    });
  }

  createNote(note: Note) {
    return axios.post(this.apiUrl, {
      title: note.title,
      content: note.content,
    }, { headers: this.headers });
  }

  updateNote(note: Note) {
    return axios.put(this.apiUrl + note._id, {
      title: note.title,
      content: note.content,
    }, { headers: this.headers });
  }

  deleteNote(_id: String) {
    return axios.delete(this.apiUrl + _id, { headers: this.headers });
  }
}

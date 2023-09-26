import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Login } from "../interfaces/login";
import { Singup } from "../interfaces/singup";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  // private apiUrl = "http://localhost:3000/api/auth/";
  private apiUrl = "http://18.222.39.99:3000/api/auth/";
  constructor(private http: HttpClient) {}

  async login(login: Login): Promise<any> {
    return this.http.post(this.apiUrl + 'login', login).pipe(catchError(this.error)).toPromise();
  }

async singup(data: Singup): Promise<any> {
    return this.http.post(this.apiUrl + 'register', data).pipe(catchError(this.error)).toPromise();
  }

  error(error: HttpErrorResponse) {
    console.log(error)
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}

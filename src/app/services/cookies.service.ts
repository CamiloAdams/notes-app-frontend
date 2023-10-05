import { Injectable } from '@angular/core';
// import { CookieService } from "ngx-cookie-service";
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService:CookieService) { }

  setCookie(key: string, value: string) {
    this.cookieService.put(key, value,{
      sameSite: 'strict',
      secure: true,
      httpOnly: true,
    });
  }

  deleteCookie(key: string) {
    this.cookieService.remove(key);
  }

  deleteAllCookies() {
    this.cookieService.removeAll();
  }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Axios } from "axios";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./pages/home/home.component";
import { SharedModule } from "./pages/shared/shared.module";
import { LoginComponent } from "./pages/home/login/login.component";
import { SingupComponent } from "./pages/home/singup/singup.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

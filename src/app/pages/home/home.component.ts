import { Component, OnInit } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { LoginComponent } from "./login/login.component";
import { MatDialog } from "@angular/material/dialog";
import { SingupComponent } from "./singup/singup.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openLogin(): void {
    this.dialog.open(LoginComponent, { width: "auto", height: "auto" });
  }

  openSingUp(): void {
    this.dialog.open(SingupComponent, {
      panelClass: "my-dialog",
      height: "auto",
    });
  }
}

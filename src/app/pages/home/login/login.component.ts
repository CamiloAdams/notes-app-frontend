import { Component, Inject, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Login } from "src/app/interfaces/login";
import { AuthService } from "src/app/services/auth.service";
import { SingupComponent } from "../singup/singup.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide: Boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    private _snackBar: MatSnackBar,
    private _authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
        ],
        [],
      ],
      password: ["", [Validators.required, Validators.minLength(1)]],
    });
  }
  ngOnInit(): void {
  }

  get email() {
    return this.form.get("email");
  }

  customError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }

  login() {
    const data: Login = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this._authService.login(data).then((res) => {
      localStorage.setItem("token", res.token);
      this.dialogRef.close();
      this.router.navigate(["app"]);
    }).catch((error) => {
      this._snackBar.open(error, "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
    });
  }


  openSingUp(): void {
    this.dialogRef.close();
    this.dialog.open(SingupComponent, {
      width: "30%",
      height: "auto",
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

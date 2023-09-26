import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Singup } from 'src/app/interfaces/singup';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent {
  form: FormGroup;
  hide: Boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SingupComponent>,
    private _snackBar: MatSnackBar,
    private _authService: AuthService
  ) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,

          Validators.maxLength(16),
          Validators.minLength(1),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
          ),
        ],
      ],
    });
  }
  ngOnInit(): void {}

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  customError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }

  singup() {
    const data = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this._authService
      .singup(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        this.dialogRef.close();
        this.router.navigate(['app']);
        this._snackBar.open('registrado', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      })
      .catch((error) => {
        this._snackBar.open(error, '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      });
  }

  openLogin(): void {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, { width: '30%', height: 'auto' });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

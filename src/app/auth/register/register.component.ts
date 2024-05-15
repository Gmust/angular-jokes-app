import {Component} from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../../button/button.component";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, NgStyle} from "@angular/common";
import {RegisterForm} from "../../../@types/auth";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;
import {ToastService} from "../../services/toast.service";
import {ToastComponent} from "../../toast/toast.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, RouterLink, FormsModule, NgIf, NgStyle, ReactiveFormsModule, ToastComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  protected readonly ButtonVariant = ButtonVariant
  strongPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
  form: RegisterForm = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor(public authService: AuthService) {
  }

  isWeakPassword(password: string): boolean {
    return !this.strongPasswordRegex.test(password);
  }

  register() {
    this.authService.register(this.form.email, this.form.password);
  }

}

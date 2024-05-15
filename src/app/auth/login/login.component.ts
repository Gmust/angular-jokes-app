import {Component} from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../../button/button.component";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LoginForm} from "../../../@types/auth";
import {NgIf} from "@angular/common";
import {ToastService} from "../../services/toast.service";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected readonly ButtonVariant = ButtonVariant;
  form: LoginForm = {
    email: '',
    password: ''
  }

  constructor(public authService: AuthService) {
  }

  submit() {
    this.authService.login(this.form.email, this.form.password)
  }


}

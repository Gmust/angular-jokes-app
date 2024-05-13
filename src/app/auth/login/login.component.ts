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

  isLoading: boolean = false;
  protected readonly ButtonVariant = ButtonVariant;
  form: LoginForm = {
    email: '',
    password: ''
  }

  constructor(public toastService: ToastService, private router: Router,) {
  }

  submit() {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        this.toastService.add('Successfully logged in!', 4000, 'success')
      })
      .catch((err: FirebaseError) => {
        console.error(err);
        this.toastService.add(err.message, 4000, "error")
      })
      .finally(() => this.isLoading = false)

  }


}

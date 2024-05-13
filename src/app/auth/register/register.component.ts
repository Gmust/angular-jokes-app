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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, RouterLink, FormsModule, NgIf, NgStyle, ReactiveFormsModule, ToastComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  protected readonly ButtonVariant = ButtonVariant
  isLoading: boolean = false;
  strongPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
  form: RegisterForm = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor(private router: Router, public toastService: ToastService) {
  }

  isWeakPassword(password: string): boolean {
    return !this.strongPasswordRegex.test(password);
  }

  register() {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then(() => {
        this.toastService.add('Successfully created account!', 4000, 'success')
        this.router.navigate(["/auth/login"])
      })
      .catch((err: FirebaseError) => {
        this.toastService.add(err.message, 4000, 'error')
      })
      .finally(() => this.isLoading = false)
  }

}

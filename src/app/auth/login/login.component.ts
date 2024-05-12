import {Component} from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../../button/button.component";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LoginForm} from "../../../@types/auth";
import {NgIf} from "@angular/common";

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

  submit() {
    console.log(this.form)
  }


}

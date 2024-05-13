import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase.config";
import {ToastComponent} from "./toast/toast.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-jokes-app';

  constructor() {
  }

  ngOnInit() {
    initializeApp(firebaseConfig);
  }

}

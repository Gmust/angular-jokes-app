import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Store } from '@ngrx/store';
import { UserActions } from './state/user.actions';
import { ToastComponent } from './toast/toast.component';
import {firebaseConfig} from "./firebase.config";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jokes-app';

  constructor(private store: Store) { }

  ngOnInit() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.store.dispatch(UserActions.setUser({ user }));
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase.config";
import {ToastComponent} from "./toast/toast.component";
import {getFirestore} from "firebase/firestore";
import {Store, StoreModule} from "@ngrx/store";
import {userReducer} from "./state/user.reducer";
import {UserActions} from "./state/user.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToastComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-jokes-app';

  constructor(private store: Store) {
  }

  ngOnInit() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.store.dispatch(UserActions.setUser({user}));
    }
  }

}


import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {ToastService} from "./toast.service";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;
import {Store} from "@ngrx/store";
import {UserActions} from "../state/user.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;
  isLoading: boolean = false;


  constructor(private router: Router, public toastService: ToastService, private store: Store) {
  }

  login(email: string, password: string) {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // @ts-ignore
        this.store.dispatch(UserActions.setUser({ user: userCredentials.user }));
        localStorage.setItem('user', JSON.stringify(userCredentials.user));
        this.toastService.add('Successfully logged in!', 4000, 'success')
      })
      .catch((err: FirebaseError) => {
        console.error(err);
        this.toastService.add(err.message, 4000, "error")
      })
      .finally(() => this.isLoading = false)
  }

  register(email: string, password: string) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.toastService.add('Successfully created account!', 4000, 'success')
        this.router.navigate(["/auth/login"])
      })
      .catch((err: FirebaseError) => {
        this.toastService.add(err.message, 4000, 'error')
      }).finally(() => this.isLoading = false)
  }


}

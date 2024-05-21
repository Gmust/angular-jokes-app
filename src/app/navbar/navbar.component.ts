import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {ButtonComponent, ButtonVariant} from '../button/button.component';
import {select, Store} from '@ngrx/store';
import {selectAuthStatus, selectCurrentUser} from "../state/user.selector";
import {UserActions} from '../state/user.actions'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    ButtonComponent,
    NgOptimizedImage,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  protected readonly ButtonVariant = ButtonVariant;
  currentUser$ = this.store.pipe(select(selectCurrentUser));
  authStatus$ = this.store.pipe(select(selectAuthStatus));

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.authStatus$.subscribe(status => console.log('Auth Status:', status));
  }

  logout() {
    localStorage.removeItem('user');
    this.store.dispatch(UserActions.removeUser());
    this.store.dispatch(UserActions.setIsAuth({isAuth: false}));
  }
}

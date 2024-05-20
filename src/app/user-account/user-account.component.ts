import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectCurrentUser} from "../state/user.selector";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {
  currentUser$ = this.store.pipe(select(selectCurrentUser));


  constructor(private store: Store) {
  }

}

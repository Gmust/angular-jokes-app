import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectCurrentUser} from "../state/user.selector";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../services/user.service";
import {filter, switchMap, take} from "rxjs";

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
export class UserAccountComponent implements OnInit {
  currentUser$ = this.store.pipe(select(selectCurrentUser));


  constructor(private store: Store, public userService:UserService) {
  }


  ngOnInit() {
    this.currentUser$
      .pipe(
        filter(user => !!user),
        take(1),
        // @ts-ignore
        switchMap(user => this.userService.getCollection(user.uid))
      )
      .subscribe({
        next: collection => {
          console.log('Collection fetched successfully:', collection);
        },
        error: err => {
          console.error('Error fetching collection:', err);
        }
      });
  }


}

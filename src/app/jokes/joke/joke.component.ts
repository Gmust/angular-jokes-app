import {Component, Input} from '@angular/core';
import {Joke} from "../../../@types/jokes";
import {AsyncPipe, NgIf, NgStyle} from "@angular/common";
import {select, Store} from "@ngrx/store";
import {selectCurrentUser} from "../../state/user.selector";
import {ToastService} from "../../services/toast.service";
import {UserService} from "../../services/user.service";
import {User} from "../../../@types/user";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    AsyncPipe
  ],
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() joke: Joke | null = null;
  currentUser$ = this.store.pipe(select(selectCurrentUser));

  constructor(private store: Store, public toastService: ToastService, public userService: UserService) {

  }

  async addJokeToFavorites(user: User, joke: Joke) {
    try {
      const result = await this.userService.addJokeToUserCollection(user.uid, joke);
      this.toastService.add('Joke added to favorites!');
    } catch (e) {
      console.error(e);
      this.toastService.add('Something went wrong', 3000, 'error');
    }
  }
}

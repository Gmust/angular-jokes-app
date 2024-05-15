import {createActionGroup, props} from '@ngrx/store'
import firebase from "firebase/compat";
import {User} from '../../@types/user'
import {Joke} from "../../@types/jokes";

export const UserActions = createActionGroup({
  source: 'Users',
  events: {
    'Set user': props<{ user: User }>(),
    'Set is Auth': props<{ isAuth: boolean }>(),
    'Remove user': props
  }
})


export const UserApiActions = createActionGroup({
  source: 'Users api',
  events: {
    'Retrieved jokes list': props<{ jokes: Joke[] }>(),
    'Add Joke to the list': props<{ joke: Joke }>(),
    'Remove joke from the list': props<{ joke: Joke }>()
  }
})

import {Joke} from "./jokes";


export interface User {
  uid: string,
  email: string,
  favoritesList: Joke[]
}


export interface UserState {
  isAuth: boolean,
  user: User | null
}

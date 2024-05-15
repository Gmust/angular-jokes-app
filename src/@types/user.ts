import {Joke} from "./jokes";


export interface User {
  id: number,
  email: string,
  favoritesList: Joke[]
}


export interface UserState {
  isAuth: boolean,
  user: User | null
}

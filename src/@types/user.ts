import {Joke} from "./jokes";


export interface User {
  id: number,
  username: string,
  email: string,
  favoritesList: Joke[]
}

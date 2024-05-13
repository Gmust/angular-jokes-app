import {Joke} from "./jokes";


export interface User {
  id: number,
  email: string,
  favoritesList: Joke[]
}

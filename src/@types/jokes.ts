import {CustomCategories} from "./categories";

export interface Joke {
  category: CustomCategories;
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
  flags: {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
  },
  id: number;
  safe: boolean;
  lang: 'en'
}


export interface JokeRes extends Joke {
  error: boolean,
  amount: number,
}

export interface JokesRes {
  error: boolean,
  amount: number,
  jokes: Joke[]
}

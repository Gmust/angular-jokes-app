import {Action, createReducer, on} from '@ngrx/store';
import {User} from '../../@types/user';
import {UserActions} from "./user.actions";

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.setUser, (state, {user}) => ({
    ...state,
    user,
    isAuthenticated: true
  })),

  on(UserActions.removeUser, state => ({
    ...state,
    user: null
  })),

  on(UserActions.setIsAuth, (state, {isAuth}) => ({
    ...state,
    isAuth
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

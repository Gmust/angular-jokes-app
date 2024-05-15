import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectAuthStatus = createSelector(
  selectUserState,
  (state: UserState) => state.isAuthenticated
);

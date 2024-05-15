import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import routeConfig from "./app.routes";
import {provideHttpClient} from "@angular/common/http";
import {provideStore} from '@ngrx/store';
import {userReducer} from "./state/user.reducer";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideHttpClient(), provideStore({user: userReducer})]
};

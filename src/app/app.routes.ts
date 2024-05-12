import {Routes} from "@angular/router";
import {StartPageComponent} from "./start-page/start-page.component";
import {JokesComponent} from "./jokes/jokes.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";

const routeConfig: Routes = [
  {
    path: '',
    component: StartPageComponent,
    title: 'Start page'
  },
  {
    path: 'jokes',
    component: JokesComponent,
    title: 'Jokes'
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    title: 'Registration'
  },
];

export default routeConfig;

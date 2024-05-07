import {Routes} from "@angular/router";
import {AppComponent} from "../app/app.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {JokesComponent} from "./jokes/jokes.component";

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
  }
];

export default routeConfig;

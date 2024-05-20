import {Component, OnInit} from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../button/button.component";
import {Router, RouterLink} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {selectCurrentUser} from "../state/user.selector";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent implements OnInit {

  protected readonly ButtonVariant = ButtonVariant;

  constructor(private store: Store, public router: Router) {
  }

  ngOnInit() {
    if (this.store.pipe(select(selectCurrentUser))) this.router.navigate(['/jokes'])
  }

}

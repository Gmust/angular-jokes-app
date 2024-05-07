import { Component } from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../button/button.component";
import {RouterLink} from "@angular/router";

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
export class StartPageComponent {

  protected readonly ButtonVariant = ButtonVariant;
}

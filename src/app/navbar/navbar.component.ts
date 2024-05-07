import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ButtonComponent, ButtonVariant} from "../button/button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return false
  }

  protected readonly ButtonVariant = ButtonVariant;
}

import {Component, Input} from '@angular/core';
import {Joke} from "../../../@types/jokes";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  @Input() joke: Joke | null = null


}

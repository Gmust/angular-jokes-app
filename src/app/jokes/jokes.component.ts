import {Component, OnInit} from '@angular/core';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {JokesService} from "../services/jokes.service";
import {Joke, JokeRes, JokesRes} from "../../@types/jokes";
import {JokeComponent} from "./joke/joke.component";

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [SearchBarComponent, HttpClientModule, NgForOf, NgIf, JokeComponent],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit {

  jokes: Joke[] = [];
  joke: JokeRes | null = null;

  constructor(private jokesService: JokesService) {
  }

  updateJokesArr(data: JokesRes | JokeRes) {
    if ("jokes" in data && data.jokes) {
      this.joke = null;
      this.jokes = data.jokes;
    }
    if ("joke" in data && data.joke || 'setup' in data && data.setup) {
      this.jokes = [];
      this.joke = data;
    }
  }

  searchNewJokes(newQuery: string) {
    this.jokesService.getJokes(newQuery).subscribe({
      next: (data: JokesRes | JokeRes) => {
        this.updateJokesArr(data)
      }
    });
  }


  ngOnInit() {
    this.jokesService.getJokes('/Any?amount=4').subscribe({
      next: (data: JokesRes | JokeRes) => {
        this.updateJokesArr(data)
      }
    });
  }

}

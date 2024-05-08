import {Component, OnInit} from '@angular/core';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [SearchBarComponent, HttpClientModule, NgForOf],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit {

  jokes: [] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // @ts-ignore
    this.http.get('https://v2.jokeapi.dev/joke/Any').subscribe({next:(data:any)=> this.jokes.push(data.setup)})
  }

}

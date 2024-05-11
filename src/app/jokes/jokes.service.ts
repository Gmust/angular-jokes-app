import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment";
import {catchError, Observable, throwError} from "rxjs";
import {JokeRes, JokesRes} from "../../@types/jokes";

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getJokes(query: string): Observable<JokeRes | JokesRes> {
    return this.http.get<JokeRes | JokesRes>(`${this.apiUrl}${query}`).pipe(
      catchError((error) => {
        console.error('API error', error);
        return throwError(() => error)
      })
    )
  }

}

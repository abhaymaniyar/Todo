import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  private tasksUrl = 'api/items';  // URL to web api

  getTasks(): Observable<Item[]> {
    return this.http.get<Item[]>(this.tasksUrl)
          .pipe(tap(items => this.log("fetched items")), 
          catchError(this.handleError('getTasks', [])));
  }

  private handleError<T> (operation = 'operation', result ? : T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    console.log(`TasksService: ${message}`);
  }

  getHero(id: number) : Observable<Item> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getHero id = ${id}`))
    );
  }
}

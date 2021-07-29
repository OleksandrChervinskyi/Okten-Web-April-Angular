import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "../../models/todos/ITodo";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _url = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private httpClient: HttpClient) {
  }

  getAllTodos(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this._url)
  }

  getTodoById(id: number): Observable<ITodo> {
    return this.httpClient.get<ITodo>(this._url + '/' + id)
  }
}

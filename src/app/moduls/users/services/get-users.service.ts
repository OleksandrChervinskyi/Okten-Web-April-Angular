import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models";

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this._url)
  }

  getOne(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this._url + '/' + id)
  }
}

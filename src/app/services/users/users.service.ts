import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../models";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url)
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url + '/' + id)
  }

}

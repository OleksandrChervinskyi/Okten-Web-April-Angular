import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models";

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  private _url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this._url)
  }

  getOne(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(this._url + '/' + id)
  }
}

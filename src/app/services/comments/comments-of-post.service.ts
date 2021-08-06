import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class CommentsOfPostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private httpClien: HttpClient) {
  }

  getCommnetsOfPost(id: number): Observable<IComments[]> {
    return this.httpClien.get<IComments[]>(this._url + id + '/comments')
  }
}

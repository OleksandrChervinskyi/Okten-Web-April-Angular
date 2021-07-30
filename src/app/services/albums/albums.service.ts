import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAlbum} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private url = 'https://jsonplaceholder.typicode.com/albums'

  constructor(private httpClien: HttpClient) {
  }

  getAllAlbums(): Observable<IAlbum[]> {
    return  this.httpClien.get<IAlbum[]>(this.url)
  }

  getAlbumById(id : number): Observable<IAlbum> {
    return  this.httpClien.get<IAlbum>(this.url + '/' + id)
  }
}

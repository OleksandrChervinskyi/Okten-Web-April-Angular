import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IPost} from "../models";
import {GetPostsService} from "./get-posts.service";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<IPost[]> {

  constructor(private getPostsService: GetPostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.getPostsService.getAll()
  }
}

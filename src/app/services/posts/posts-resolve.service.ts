import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPost} from "../../models";
import {PostsService} from "./posts.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]> {

  constructor(private postService: PostsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getAllPosts();
  }
}

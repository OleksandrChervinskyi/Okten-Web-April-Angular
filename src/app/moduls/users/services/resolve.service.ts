import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../models";
import {Observable} from "rxjs";
import {GetUsersService} from "./get-users.service";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<IUser[]> {

  constructor(private getUsersService : GetUsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.getUsersService.getAll()
  }
}

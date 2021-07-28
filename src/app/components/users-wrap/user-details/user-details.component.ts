import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users/users.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../../models/users/IUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser

  constructor(
    private userServices: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(({id}) =>
      this.userServices.getUserById(id).subscribe(value => this.user = value))
  }

  ngOnInit(): void {


  }

}

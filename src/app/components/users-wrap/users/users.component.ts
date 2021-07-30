import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users/users.service";
import {IUser} from "../../../models";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]

  constructor(private userServices: UsersService) {

  }

  ngOnInit(): void {
   this.userServices.getAllUsers().subscribe(value => this.users = value)
  }

}

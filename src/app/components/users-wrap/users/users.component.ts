import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users/users.service";
import {IUser} from "../../../models/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : IUser[]
  oneUser : IUser


  constructor(private userServices : UsersService) {
  }


  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(value => this.users = value)
  }

  showMore(tref : HTMLFormElement) {
    const userId  = tref.usersList.value
    const newUser = this.users.filter(value => value.id === +userId)
    this.oneUser = newUser[0] // pull out user {} from []
  }
}

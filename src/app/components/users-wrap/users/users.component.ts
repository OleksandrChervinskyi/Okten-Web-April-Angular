import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : IUser[]
  oneUser : IUser


  constructor(private activatedRoute : ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.users = value.usersList)
  }

  showMore(tref : HTMLFormElement) {
    const userId  = tref.usersList.value
    const newUser = this.users.filter(value => value.id === +userId)
    this.oneUser = newUser[0] // pull out user {} from []
  }
}

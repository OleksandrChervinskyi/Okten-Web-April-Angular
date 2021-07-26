import {Component, OnInit} from '@angular/core';
import {IUser} from "../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  users:IUser[] = [
    {name: 'alex', age: 33},
    {name: 'maks', age: 22},
    {name: 'artor', age: 12},
    {name: 'serg', age: 45},
    {name: 'dmitryi', age: 10, status:false},
  ]
}

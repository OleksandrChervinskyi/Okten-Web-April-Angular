import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../models/users";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  oneUser : IUser

  constructor() { }

  ngOnInit(): void {
  }

}

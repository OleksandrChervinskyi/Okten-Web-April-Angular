import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {GetUsersService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getUsersService: GetUsersService
  ) {
    this.activatedRoute.params.subscribe(value => {
      // Check existence .extras.state from previous component
      if (this.router.getCurrentNavigation()?.extras.state) {
        // If is - get from extras
        this.user = this.router.getCurrentNavigation()?.extras.state as IUser
        console.log('state from previous component - user')
      } else {
        // If not - refetch
        this.getUsersService.getOne(value.id).subscribe(value => this.user = value)
        console.log('state from https://jsonplaceholder.typicode.com/users')
      }
    })
  }

  ngOnInit(): void {


  }

}

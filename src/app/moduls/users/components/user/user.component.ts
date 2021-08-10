import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {CounterStoreService} from "../../../../services/counter-store.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private counterStoreService: CounterStoreService
  ) {
  }

  ngOnInit(): void {
  }

  navigateToUserDetails() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})

    // Add +1 to gCounter
    const counterValue = this.counterStoreService.getSnapShotCounter()
    this.counterStoreService.setNewCounter(counterValue + 1)
  }
}

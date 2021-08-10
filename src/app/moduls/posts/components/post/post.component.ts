import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CounterStoreService} from "../../../../services/counter-store.service";
import {IPost} from "../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private counterStoreService: CounterStoreService
  ) {
  }

  ngOnInit(): void {
  }

  navigateToPostDetails() {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post})

    // Add +1 to gCounter
    const counterValue = this.counterStoreService.getSnapShotCounter()
    this.counterStoreService.setNewCounter(counterValue + 1)
  }

}

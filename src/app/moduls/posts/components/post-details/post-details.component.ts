import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../models";
import {GetPostsService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getPostsServises: GetPostsService
  ) {
    this.activatedRoute.params.subscribe(value => {
      // Check existence .extras.state from previous component
      if (this.router.getCurrentNavigation()?.extras.state) {
        // If is - get from extras
        this.post = this.router.getCurrentNavigation()?.extras.state as IPost
        console.log('state from previous component - posts')
      } else {
        // If not - refetch
        this.getPostsServises.getOne(value.id).subscribe(value => this.post = value)
        console.log('state from https://jsonplaceholder.typicode.com/posts')
      }
    })
  }

  ngOnInit(): void {
  }

}

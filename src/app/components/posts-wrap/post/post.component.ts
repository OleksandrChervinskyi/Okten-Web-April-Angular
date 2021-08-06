import {Component, OnInit} from '@angular/core';
import {IPost} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../../services/posts/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: IPost

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postServices: PostsService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        // get post from state
        this.post = this.router.getCurrentNavigation()?.extras?.state as IPost
        console.log('Get post from state')
      } else {
        // get post from https://jsonplaceholder.typicode.com
        this.postServices.getPostById(id).subscribe(value => this.post = value)
        console.log('Get post from https://jsonplaceholder.typicode.com')
      }

    })

  }

  ngOnInit(): void {

  }

  navigateToCommentsOfPost() {
    this.router.navigate(['comments'], {relativeTo: this.activatedRoute, state: this.post})
  }
}

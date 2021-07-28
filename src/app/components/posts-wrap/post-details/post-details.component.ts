import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../services/posts/posts.service";
import {IPost} from "../../../models/posts/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost

  constructor(
    private postServices: PostsService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>
      this.postServices.getPostById(id).subscribe(value => this.post = value))
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IComments} from "../../../models";
import {IPost} from "../../../models";
import {CommentsOfPostService} from "../../../services/comments/comments-of-post.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComments[]
  onePost: IPost

  constructor(
    private router: Router,
    private CommentsOfPostService: CommentsOfPostService
  ) {
    this.onePost = this.router.getCurrentNavigation()?.extras.state as IPost
  }

  ngOnInit(): void {
    this.CommentsOfPostService.getCommnetsOfPost(this.onePost.id).subscribe(value => this.comments = value)
  }

}

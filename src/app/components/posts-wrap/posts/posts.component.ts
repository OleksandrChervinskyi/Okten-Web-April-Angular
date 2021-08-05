import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostsService} from "../../../services/posts/posts.service";
import {IPost} from "../../../models/posts/IPosts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[]

  controls = {
    postsList: new FormControl([]) // select
  }

  myForm: FormGroup = new FormGroup(this.controls)

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(value => this.posts = value)
  }

  showDetails() {
    console.log(this.posts)
  }
}

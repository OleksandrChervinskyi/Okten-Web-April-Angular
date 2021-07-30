import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../services/posts/posts.service";
import {IPost} from "../../../models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : IPost[]

  constructor(private postsServices : PostsService) { }

  ngOnInit(): void {
    this.postsServices.getAllPosts().subscribe(value => this.posts = value)
  }

}

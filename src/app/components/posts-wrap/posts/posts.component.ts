import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostsService} from "../../../services/posts/posts.service";
import {IPost} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // State
  posts: IPost[]
  post: IPost

  // From's controls
  controls = {
    postsList: new FormControl(),  // select
  }

  // Reactive form
  myForm: FormGroup = new FormGroup(this.controls)

  constructor(
    private postsService: PostsService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // By resolve
    this.activatedRoute.data.subscribe(value => this.posts = value.postsList)
  }

  showDetails() {
    // get selected post
    const onePostInArray = this.posts.filter(value => value.id === +this.myForm.value.postsList)
    this.post = onePostInArray[0]

    //  navigate to new page posts/:id
    this.router.navigate([this.post.id], {relativeTo : this.activatedRoute, state:this.post})

  }
}

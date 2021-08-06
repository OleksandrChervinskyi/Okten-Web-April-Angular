import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../../services/posts/posts.service";
import {IPost} from "../../../models";
import {customLimitValidators} from "./customValidators";

@Component({
  selector: 'app-one-exect-post',
  templateUrl: './one-exect-post.component.html',
  styleUrls: ['./one-exect-post.component.css']
})
export class OneExectPostComponent implements OnInit {

  post: IPost

  // Form`s controls
  controls = {
    exactIdInput: new FormControl('', [Validators.required, customLimitValidators])
  }

  //Reactive form
  myForm: FormGroup = new FormGroup(this.controls)

  constructor(private postServices: PostsService) {
  }

  ngOnInit(): void {
  }

  getExactPost() {
    this.postServices.getPostById(this.myForm.controls.exactIdInput.value).subscribe(value => this.post = value)
  }
}


import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../../services/posts/posts.service";
import {IPost} from "../../../models/posts/IPosts";

@Component({
  selector: 'app-one-exect-post',
  templateUrl: './one-exect-post.component.html',
  styleUrls: ['./one-exect-post.component.css']
})
export class OneExectPostComponent implements OnInit {

  post: IPost

  //Custom Validators
  customValidators(control: AbstractControl) {

    if (control.value > 100 || control.value < 1) {
      return {numberLimits: 'Limits must be bettwen 1 - 100'}
    }
    return null

  }

  // Form`s controls
  controls = {
    exactIdInput: new FormControl('', [Validators.required, this.customValidators])
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

// !!resolve
// indexes
// check tpl form
// comments

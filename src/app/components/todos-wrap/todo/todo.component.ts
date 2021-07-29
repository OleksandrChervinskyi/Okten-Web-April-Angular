import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../models/todos/ITodo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  navigateToTodoDetails() {
    this.router.navigate(
      [this.todo.id],
      {
        relativeTo: this.activatedRoute,
        state: this.todo
      })
  }
}

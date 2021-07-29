import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ITodo} from "../../../models/todos/ITodo";
import {TodosService} from "../../../services/todos/todos.service";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: ITodo

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodosService
  ) {

    this.activatedRoute.params.subscribe(value => {
        // Check existence .extras.state from previous component
        if (this.router.getCurrentNavigation()?.extras.state) {
          // If is - get from extras
          this.todo = this.router.getCurrentNavigation()?.extras.state as ITodo
          console.log('state from previous component - todo')
        } else {
          // If not - refetch
          this.todoService.getTodoById(value.id).subscribe(value => this.todo = value)
          console.log('state from https://jsonplaceholder.typicode.com/todos')
        }
      }
    )
  }

  ngOnInit(): void {


  }

}

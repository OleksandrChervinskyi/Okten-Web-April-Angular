import {TodosComponent} from "../../components/todos-wrap/todos/todos.component";
import {TodoDetailsComponent} from "../../components/todos-wrap/todo-details/todo-details.component";
import {TodoGuardsService} from "../../services/todos/todo-guards.service";

export const TodosRoute =
  {
    path: 'todos',
    component: TodosComponent,
    children: [
      {
        path: ':id',
        component: TodoDetailsComponent,
        canActivate: [TodoGuardsService]
      }
    ],
    canDeactivate: [TodoGuardsService]
  }

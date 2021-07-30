import {TodoDetailsComponent, TodosComponent} from "../../components";
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

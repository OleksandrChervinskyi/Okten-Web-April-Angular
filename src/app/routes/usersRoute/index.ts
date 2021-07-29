import {UsersComponent} from "../../components/users-wrap/users/users.component";
import {UserDetailsComponent} from "../../components/users-wrap/user-details/user-details.component";
import {UserGuardsService} from "../../services/users/user-guards.service";

export const UsersRoute =
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        canActivate: [UserGuardsService],
      }
    ],
    canDeactivate: [UserGuardsService]
  }

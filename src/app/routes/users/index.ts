import {UsersComponent} from "../../components";
import {UserResolveService} from "../../services/users/user-resolve.service";

export const UsersRoutes = {
  path : 'users',
  component : UsersComponent,
  resolve : {usersList : UserResolveService }
}

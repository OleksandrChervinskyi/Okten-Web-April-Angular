import {UsersComponent} from "../components/users-wrap/users/users.component";
import {Routes} from "@angular/router";
import {UserDetailsComponent} from "../components/users-wrap/user-details/user-details.component";
import {PostsComponent} from "../components/posts-wrap/posts/posts.component";
import {PostDetailsComponent} from "../components/posts-wrap/post-details/post-details.component";

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children : [
      {path : ':id', component : UserDetailsComponent}
    ]
  },
  {
    path : 'posts',
    component : PostsComponent,
    children : [
      {path : ':id' , component: PostDetailsComponent}
    ]
  }
]

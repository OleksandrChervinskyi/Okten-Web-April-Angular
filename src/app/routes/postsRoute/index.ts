import {PostsComponent} from "../../components/posts-wrap/posts/posts.component";
import {PostDetailsComponent} from "../../components/posts-wrap/post-details/post-details.component";
import {PostsGuardService} from "../../services/posts/posts-guard.service";

export const PostsRoute =
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: ':id',
        component: PostDetailsComponent,
        canActivate: [PostsGuardService]
      }
    ],
    canDeactivate: [PostsGuardService]
  }

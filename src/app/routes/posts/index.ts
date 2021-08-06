import {PostsComponent} from "../../components";
import {PostComponent} from "../../components";
import {PostsResolveService} from "../../services/posts/posts-resolve.service";
import {CommentsComponent} from "../../components";

export const PostsRoutes = {
  path: 'posts',
  component: PostsComponent,
  resolve : {postsList : PostsResolveService},
  children: [
    {
      path: ':id',
      component: PostComponent,
      children : [
        {
          path: 'comments',
          component : CommentsComponent
        }
      ]
    }

  ]
}


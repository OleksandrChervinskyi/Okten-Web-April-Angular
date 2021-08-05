import {PostsComponent} from "../../components/posts-wrap/posts/posts.component";
import {PostComponent} from "../../components/posts-wrap/post/post.component";

export const PostsRoutes = {
  path: 'posts',
  component: PostsComponent,
  children: [
    {
      path: ':id',
      component: PostComponent
    }
  ]
}


import {Routes} from "@angular/router";
import {UsersRoute} from "./usersRoute";
import {TodosRoute} from "./todosRoute";
import {PostsRoute} from "./postsRoute";
import {AlbumsRoute} from "./albumsRoute";
import {AlbumRouteChildrens} from "./albumsRoute/albumRoute-childrens";

export const routes: Routes = [
  UsersRoute,
  PostsRoute,
  AlbumsRoute,
  AlbumRouteChildrens,
  TodosRoute
]

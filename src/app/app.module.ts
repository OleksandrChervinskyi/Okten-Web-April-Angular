import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {UserComponent} from "./components/users-wrap/user/user.component";
import {PostsComponent} from './components/posts-wrap/posts/posts.component';
import {UsersComponent} from "./components/users-wrap/users/users.component";
import {UserDetailsComponent} from './components/users-wrap/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes";
import {PostDetailsComponent} from './components/posts-wrap/post-details/post-details.component';
import { PostComponent } from './components/posts-wrap/post/post.component';
import { AlbumsComponent } from './components/albums-wrap/albums/albums.component';
import { AlbumComponent } from './components/albums-wrap/album/album.component';
import { AlbumDetailsComponent } from './components/albums-wrap/album-details/album-details.component';
import { TodosComponent } from './components/todos-wrap/todos/todos.component';
import { TodoComponent } from './components/todos-wrap/todo/todo.component';
import {TodoDetailsComponent} from "./components/todos-wrap/todo-details/todo-details.component";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    PostComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {
  AlbumComponent,
  AlbumDetailsComponent,
  AlbumsComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  TodoComponent,
  TodoDetailsComponent,
  TodosComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from "./components";
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes";


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

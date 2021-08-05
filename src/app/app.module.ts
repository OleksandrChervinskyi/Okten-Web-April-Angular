import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users-wrap/users/users.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/users-wrap/user/user.component';
import {PostsComponent} from './components/posts-wrap/posts/posts.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { PostComponent } from './components/posts-wrap/post/post.component';
import { OneExectPostComponent } from './components/posts-wrap/one-exect-post/one-exect-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    OneExectPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: () => import('./moduls/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./moduls/posts/posts.module').then(m => m.PostsModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

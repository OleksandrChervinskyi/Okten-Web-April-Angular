import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostComponent, PostDetailsComponent, PostsComponent} from './components';
import {GetPostsService, GuardsService, ResolveService} from "./services";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetPostsService,
    GuardsService,
    ResolveService
  ]
})
export class PostsModule {
}

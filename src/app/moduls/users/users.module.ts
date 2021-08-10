import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UserComponent, UserDetailsComponent, UsersComponent} from './components';
import {HttpClientModule} from "@angular/common/http";
import {GetUsersService, GuardsService, ResolveService} from "./services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetUsersService,
    ResolveService,
    GuardsService
  ]
})
export class UsersModule {
}

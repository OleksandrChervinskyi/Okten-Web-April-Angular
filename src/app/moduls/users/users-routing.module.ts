import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent, UsersComponent} from "./components";
import {GuardsService, ResolveService} from "./services";

const routes: Routes = [
  {
    path: '', // users/
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        canActivate: [GuardsService]
      }
    ],
    resolve: {usersList: ResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}

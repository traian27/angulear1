import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'index',
    canActivate: [AuthGuard],
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

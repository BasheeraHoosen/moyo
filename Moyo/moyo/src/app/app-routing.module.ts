import { AddOrderComponent } from './product/add-order/add-order.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { ReadOrderComponent } from './order/read-order/read-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientGuard } from './guard/client.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'orders',
    component: ReadOrderComponent,
    canActivate: [ClientGuard]
  },
  {
    path: 'order',
    component: ViewOrderComponent,
    canActivate: [ClientGuard]
  },
  {
    path: 'products',
    component: AddOrderComponent,
    canActivate: [ClientGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

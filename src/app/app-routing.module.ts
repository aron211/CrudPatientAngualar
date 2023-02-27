import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './vistas/login/login.component'
import {DashboardComponent} from './vistas/dashboard/dashboard.component'
import {CreateComponent} from './vistas/create/create.component'
import {EditComponent} from './vistas/edit/edit.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'create', component:CreateComponent},
  { path:'edit/:id', component:EditComponent},
  { path: '**', redirectTo: 'login'}

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   // declarations: [],
//   imports: [RouterModule.forRoot(routes)],
//   imports: [CommonModule],
// })

// const routes: Routes = [
//   { path: 'login', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
//   { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
//   { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
//   { path: 'recoverPassword', loadChildren: () => import('./recover-password/recover-password.module').then(m => m.RecoverPasswordModule) }
// ];


export class AppRoutingModule { }
export const routingComponent = [
  LoginComponent, 
  DashboardComponent, 
  CreateComponent,
  EditComponent
]
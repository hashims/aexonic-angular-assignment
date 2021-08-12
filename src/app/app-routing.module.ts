import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import(`./home/home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: 'cart',
    component: CartComponent,
    loadChildren: () =>
      import(`./cart/cart/cart.module`).then((m) => m.CartModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

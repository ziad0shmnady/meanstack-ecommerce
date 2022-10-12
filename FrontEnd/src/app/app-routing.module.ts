import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDeatilsComponent } from './Components/product-deatils/product-deatils.component';
import { ViewAllProductsComponent } from './Components/view-all-products/view-all-products.component';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/register', component: RegisterComponent },
  { path: 'home/cart', component: CartComponent },
  { path: 'home/productDeatils/:id', component: ProductDeatilsComponent },
  {
    path: 'home/products/:category',
    component: ViewAllProductsComponent,
  },
  { path: 'home/profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './Components/main-page/categories/categories.component';
import { HeroComponent } from './Components/main-page/hero/hero.component';
import { SubHeaderComponent } from './layouts/sub-header/sub-header.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElectronicsComponent } from './Components/main-page/electronics/electronics.component';
import { ViewAllProductsComponent } from './Components/view-all-products/view-all-products.component';
import { ProductsComponent } from './Components/main-page/products/products.component';
import { ProductComponent } from './Components/main-page/product/product.component';
import { ProductDeatilsComponent } from './Components/product-deatils/product-deatils.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { CartLineComponent } from './Components/cart-line/cart-line.component';
import { CartComponent } from './Components/cart/cart.component';
import { FilterProductsComponent } from './Components/filter-products/filter-products.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HeroComponent,
    SubHeaderComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ElectronicsComponent,
    ViewAllProductsComponent,
    ProductsComponent,
    ProductComponent,
    ProductDeatilsComponent,
    CartLineComponent,
    CartComponent,
    FilterProductsComponent,
    AllProductsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    SwiperModule,
    NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

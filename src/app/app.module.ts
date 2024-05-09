import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CatrgoriesComponent } from './components/catrgories/catrgories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistorComponent } from './components/registor/registor.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavoneComponent } from './components/navone/navone.component';
import { NavtwoComponent } from './components/navtwo/navtwo.component';
import { FullnavComponent } from './components/fullnav/fullnav.component';
import { SmallnavComponent } from './components/smallnav/smallnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { CustemPipePipe } from './custem-pipe.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AlloredersComponent } from './components/alloreders/alloreders.component';
import {RouterModule } from '@angular/router';
import { SpaceComponent } from './components/space/space.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { DetailsBrandComponent } from './components/details-brand/details-brand.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CodeComponent } from './components/code/code.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CatrgoriesComponent,
    FooterComponent,
    LoginComponent ,
    RegistorComponent,
    NotfoundComponent,
    DetailsComponent,
    NavoneComponent,
    NavtwoComponent,
    FullnavComponent,
    SmallnavComponent,
    CustemPipePipe,
    SearchPipe,
    CheckOutComponent,
    AlloredersComponent,
    SpaceComponent,
    DetailsProductComponent,
    DetailsBrandComponent,
    ForgetpasswordComponent,
    CodeComponent,
    ResetpasswordComponent,
    WishlistComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    ReactiveFormsModule ,
    BrowserAnimationsModule ,
    CarouselModule ,
    FormsModule ,
    ToastrModule.forRoot(
      {
        timeOut: 0,
        positionClass: 'toast-center-center',
        closeButton : true ,
        progressBar : true ,

  }

    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

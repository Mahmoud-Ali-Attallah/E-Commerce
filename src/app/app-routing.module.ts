import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CatrgoriesComponent } from './components/catrgories/catrgories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistorComponent } from './components/registor/registor.component';
import { LoginComponent } from './components/login/login.component';
import { NavoneComponent } from './components/navone/navone.component';
import { NavtwoComponent } from './components/navtwo/navtwo.component';
import { FullnavComponent } from './components/fullnav/fullnav.component';
import { SmallnavComponent } from './components/smallnav/smallnav.component';
import { guardRouteGuard } from './shared/guard/guard-route.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AlloredersComponent } from './components/alloreders/alloreders.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

import { DetailsBrandComponent } from './components/details-brand/details-brand.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CodeComponent } from './components/code/code.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const routes: Routes = [
// {path:"" , redirectTo:"home" ,pathMatch:"full"},
// {path:"home" , component:HomeComponent , title:"home"},
// {path:"cart" , component:CartComponent , title:"cart"},
// {path:"Products" , component:ProductsComponent , title:"Products"},
// {path:"Categories" , component:CatrgoriesComponent, title:"Categories"},
// {path:"Brands" , component:BrandsComponent , title:"Brands"} ,
// {path:"Register" , component:RegistorComponent , title:"Register"} ,
// {path:"Login" , component:LoginComponent , title:"Login"} ,
// {path:"**" , component:NotfoundComponent , title:"NotFound"}

//==========================================================


// {path:"" , component:NavoneComponent , children:[
// {path:"home" , component:HomeComponent , title:"home"},
// {path:"cart" , component:CartComponent , title:"cart"} ,
// {path:"Products" , component:ProductsComponent , title:"Products"},
// {path:"Categories" , component:CatrgoriesComponent, title:"Categories"},
// {path:"Brands" , component:BrandsComponent , title:"Brands"} ,
// ]} ,

// {path:"" , component:NavtwoComponent , children : [
//   {path:"Register" , component:RegistorComponent , title:"Register"} ,
// {path:"Login" , component:LoginComponent , title:"Login"} ,
// ]} ,

// {path:"**" , component:NotfoundComponent}

//==================================================================

{path:"" ,canActivate:[guardRouteGuard] , component:FullnavComponent , children:[
  {path : "" , redirectTo:'home'  ,pathMatch:'full'} ,
  {path:"home" , component:HomeComponent , title:"home" ,  },
  {path:"cart" , component:CartComponent , title:"cart"} ,
  {path:"Products" , component:ProductsComponent , title:"Products"},
  {path:"Categories" , component:CatrgoriesComponent, title:"Categories"},
  {path:"Brands" , component:BrandsComponent , title:"Brands"} ,
  {path:"checkOut/:id" , component:CheckOutComponent , title:"checkOut"} ,
  {path:"details/:id" , component:DetailsComponent , title:"details"} ,
  {path:"detailsProduct/:name" , component:DetailsProductComponent , title:"ProductOfCategaries"} ,
  {path:"detailsBrands/:name" , component:DetailsBrandComponent , title:"ProductOfBrands"} ,
  {path:"allorders" , component:AlloredersComponent , title:"alloreders"} ,
  {path:"wishlist" , component:WishlistComponent , title:"wishlist"} ,
  {path:"setting" , loadChildren:()=>import("./setting-modeul/setting-modeul.module").then((response)=>response.SettingModeulModule)}

  ]} ,

  {path:"" , component:SmallnavComponent , children : [
    {path:"Register" , component:RegistorComponent , title:"Register"} ,
  {path:"Login" , component:LoginComponent , title:"Login"} ,
  {path:"forget" , component:ForgetpasswordComponent , title:"Forget Password"} ,
  {path:"code/:email" , component:CodeComponent , title:"Code"} ,
  {path:"resetpassword/:email" , component:ResetpasswordComponent , title:"Reset Password"} ,
  ]} ,

  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

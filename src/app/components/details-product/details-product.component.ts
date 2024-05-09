import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InterProduct } from 'src/app/shared/Interfaces/inter-product';
import { Wishlist } from 'src/app/shared/Interfaces/wishlist';
import { CartService } from 'src/app/shared/services/cart.service';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
constructor( private _ActivatedRoute:ActivatedRoute ,  private _GetDataService : GetDataService , private _CartService:CartService , private TostrService:ToastrService , private __WishlistService:WishlistService ){}
name:string|null = "" ;
Data : InterProduct[] = [] ;
noOfItems : number = 0 ;
show : boolean = true ;
wishList : Wishlist[] = []


ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next : (param)=>{
     this.name = param.get('name') ;
    //  console.log(this.name)
     this.getData() ;
    }
  })
  this.__WishlistService.Getwishlist().subscribe({
    next :(response)=>{
  this.wishList = response.data
  this.__WishlistService.noOfFav.next(this.wishList.length)
  console.log(this.wishList)
  if(this.wishList.length > 0){
    for(let i = 0 ; i < this.wishList.length ; i++ ){
for(let j = 0 ; j < this.Data.length ; j++){
// console.log("1" , "2")
if(this.wishList[i]._id == this.Data[j].id){
  this.Data[j].Add =true
  // this.Data[i].remove =false
}
// else{
//   this.Data[j].Add =false
//   // this.Data[i].remove =true
// }
}
    }
  }
  else{
    for(let i = 0 ; i < this.Data.length ; i++){
      this.Data[i].Add = false ;
    }
  }
    }
  })
  this._CartService.displayCart().subscribe({
    next : (response)=> {
      console.log(response.data.products.length) ;
      console.log(response.data.products) ;
          for(let i = 0 ; i < this.Data.length ; i++){
          this.Data[i].Buy = false ;
          this.Data[i].count = 0 ;
      }
       for(let i = 0 ; i < this.Data.length ; i++){
        this.Data[i].count = 0 ;
    }
      if(response.data.products.length <= 0){
        for(let i = 0 ; i < this.Data.length ; i++){
          this.Data[i].Buy = false ;
          this.Data[i].count = 0 ;
      }
    }
    else{
      for(let i = 0 ; i < response.data.products.length ; i++ ){
        for(let j = 0 ; j < this.Data.length ; j++){
          if(response.data.products[i].product.id == this.Data[j]._id){
            this.Data[j].Buy =true;
            this.Data[j].count = response.data.products[i].count
            console.log("4545")
          }

        }
              }
    }
     }
     }
     )
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

getData(){
  this._GetDataService.getProduct().subscribe({
    next : (response)=>{
      this.Data = response.data.filter((value : InterProduct)=>value.category.name==this.name)
      // console.log(this.Data)
      this.show = false
      // this.cons = this.Data ;
// this.show = false ;
;
  },
  })
}
addtoCart(data:string , i :number){
  this.noOfItems = 0 ;
 (this._CartService.addCart(data).subscribe({
  next: (response)=> {
    this.Data[i].Buy=true ;
    ++this.Data[i].count ;
    // console.log(response)
  this.TostrService.success(response.message)
  for(let i = 0 ; i < response.data.products.length ; i++){
    this.noOfItems += response.data.products[i].count
  }
  this._CartService.noOfItems.next(this.noOfItems)  ;
  }
 }))  ;
}
Favorite(id:string , Add:boolean , index : number){
  if(Add == true){
    this.__WishlistService.RemoveProduct(id).subscribe({
next:(response)=>{
this.Data[index].Add=false ;
this.__WishlistService.noOfFav.next(response.data.length)
console.log(response)
this.TostrService.success(response.message)

}
    })
  }
  else{
    this.__WishlistService.AddProduct(id).subscribe({
      next :(response)=>{
        this.Data[index].Add=true ;
        this.__WishlistService.noOfFav.next(response.data.length)
console.log(response)

        this.TostrService.success(response.message)

      }
    })
  }
}


}

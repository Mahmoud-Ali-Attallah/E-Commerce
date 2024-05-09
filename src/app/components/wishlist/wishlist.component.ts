import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DisplayCart } from 'src/app/shared/Interfaces/display-cart';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
interface wishlistcart{
imageCover : string ,
price : string ,
title : string ,
_id : string
}
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  // Data : DisplayCart = {} as DisplayCart ;
  Data : wishlistcart[] = [] ;
  // quantity : number[] = [] ;
  noOfItems : number = 0 ;
  show : boolean = true ;
constructor( private _Getwishlist:WishlistService , private _WishlistService:WishlistService , private TostrService:ToastrService , private _CartService:CartService   ){}
ngOnInit(): void {
this._Getwishlist.Getwishlist().subscribe({
  next:(response)=>{
console.log(response)
this.Data=response.data
this.show = false ;
  }
})
}
remove(id :string , hghj : number){
  this._WishlistService.RemoveProduct(id).subscribe({
    next:(response)=>{
    this._WishlistService.noOfFav.next(response.data.length)
    console.log(response)
    this.Data = this.Data.filter((value , index)=>index!=hghj)
    this.TostrService.success(response.message)
    }
        })
}
addtoCart(data:string){
  this.noOfItems = 0 ;
 (this._CartService.addCart(data).subscribe({
  next: (response)=> {
    // console.log(response)
  this.TostrService.success(response.message)
  for(let i = 0 ; i < response.data.products.length ; i++){
    this.noOfItems += response.data.products[i].count
  }
  this._CartService.noOfItems.next(this.noOfItems)  ;
  }
 }))  ;
}
// plus(id:string , i : number){
//   if((this.Data.products[i].count)+1 <= this.quantity[i]){
//    this._CartService.upDataCount(id , (this.Data.products[i].count+1) ).subscribe({
//     next : (response)=>{

//       // console.log(response)
//       this.Data=response.data
//       this.noOfItems = 0 ;
// for(let i = 0 ; i < response.data.products.length ; i++){
//   this.noOfItems += response.data.products[i].count
// }
// this._CartService.noOfItems.next(this.noOfItems)  ;
//     },
//     error : (err)=>{
//   // console.log(err)
//     }
//    })
//   }

// }
// minus(id:string , i : number){
//   if(this.Data.products[i].count>1){
//    this._CartService.upDataCount(id , (this.Data.products[i].count-1)).subscribe({
//     next : (response)=>{
//       this.Data=  response.data
//       this.noOfItems = 0 ;
//       for(let i = 0 ; i < response.data.products.length ; i++){
//         this.noOfItems += response.data.products[i].count
//       }
//       this._CartService.noOfItems.next(this.noOfItems)  ;
//     }
//    })
//   }
// }
// quintatity(i : number , id:string , ele?:any){
//   if(ele.target.value <= this.quantity[i] && ele.target.value > 0  )
//   {
//    this._CartService.upDataCount(id , ele.target.value ).subscribe({
//     next : (response)=>{
//       this.Data=  response.data
//       this.noOfItems = 0 ;
//       for(let i = 0 ; i < response.data.products.length ; i++){
//         this.noOfItems += response.data.products[i].count
//       }
//       this._CartService.noOfItems.next(this.noOfItems)  ;
//     }
//    })
//   //  this.Data.products[i].count  = ele.target.value ;
//   }
//   else if (ele.target.value > this.quantity[i]){
//     this._CartService.upDataCount(id , this.quantity[i] ).subscribe({
//       next : (response)=>{
//         this.Data=  response.data
//         this.noOfItems = 0 ;
//         for(let i = 0 ; i < response.data.products.length ; i++){
//           this.noOfItems += response.data.products[i].count
//         }
//         this._CartService.noOfItems.next(this.noOfItems)  ;
//       }
//      })
//   //  this.Data.products[i].count  =  this.quantity[i] ;
//   //  ele.target.value = this.Data.products[i].count
//   }
//  else{
//   //  ele.target.value = 1
//   //  this.Data.products[i].count  = ele.target.value ;
//    this._CartService.upDataCount(id , 1 ).subscribe({
//     next : (response)=>{
//       this.Data=  response.data
//       this.noOfItems = 0 ;
//       for(let i = 0 ; i < response.data.products.length ; i++){
//         this.noOfItems += response.data.products[i].count
//       }
//       this._CartService.noOfItems.next(this.noOfItems)  ;
//     }
//    })

//   }
// }
// remove(id:any){
//   this._CartService.removeProduct(id).subscribe({
//     next : (response)=>{
//       console.log(response)
//       this.Data=response.data
//       this.noOfItems = 0 ;
//       for(let i = 0 ; i < response.data.products.length ; i++){
//         this.noOfItems += response.data.products[i].count
//       }
//       this._CartService.noOfItems.next(this.noOfItems)  ;
//     }
//   })

//   console.log("kljlk")
// }

}

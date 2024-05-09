import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-navone',
  templateUrl: './navone.component.html',
  styleUrls: ['./navone.component.css']
})
export class NavoneComponent {
  NoItem : number = 0 ;
  noOfItems : number = 0 ;
  noFav : number = 0 ;
  constructor(private _SharedDataService:SharedDataService , private _CartService: CartService , private _WishlistService : WishlistService  ){}
  ngOnInit(): void {
    this._CartService.displayCart().subscribe({
      next : (response)=>{
      // console.log(response)
      for(let i = 0 ; i < response.data.products.length ; i++){
        this.noOfItems += response.data.products[i].count
      }
      this._CartService.noOfItems.next(this.noOfItems);
      }
    })
    this._CartService.noOfItems.subscribe({
      next : (response)=>{
this.NoItem = response
      }
    })
    this._WishlistService.Getwishlist().subscribe({
      next :(response)=>{
    this._WishlistService.noOfFav.next(response.data.length)
      }
    })
    this._WishlistService.noOfFav.subscribe({
      next: (response)=>{
        this.noFav = response ;
      }
    })


  }
// NoItem = this._CartService.noOfItems ;

signout(){
  this._SharedDataService.signout() ;
}
}

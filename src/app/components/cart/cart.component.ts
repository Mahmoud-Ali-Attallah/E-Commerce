import { Component, Input, OnInit } from '@angular/core';
import { BrandsComponent } from '../brands/brands.component';
import { TraningService } from 'src/app/traning.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { DisplayCart } from 'src/app/shared/Interfaces/display-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  Data : DisplayCart = {} as DisplayCart ;
  quantity : number[] = [] ;
  noOfItems : number = 0 ;
  show : boolean = true ;
constructor(private _CartService:CartService){}
ngOnInit(): void {
 this._CartService.displayCart().subscribe({
next : (response)=> {
  this.Data = response.data ;
  localStorage.setItem('cartOner' , this.Data.cartOwner ) ;
  console.log(this.Data)
  // console.log(response.cartOwner)
  for(let i = 0 ; i < this.Data.products.length ; i++){
this.quantity[i]=this.Data.products[i].product.quantity ;
  }
  this.show = false ;
  // this.quantity=this.Data.products
 }
 }
 )
}
plus(id:string , i : number){
  if((this.Data.products[i].count)+1 <= this.quantity[i]){
   this._CartService.upDataCount(id , (this.Data.products[i].count+1) ).subscribe({
    next : (response)=>{

      // console.log(response)
      this.Data=response.data
      this.noOfItems = 0 ;
for(let i = 0 ; i < response.data.products.length ; i++){
  this.noOfItems += response.data.products[i].count
}
this._CartService.noOfItems.next(this.noOfItems)  ;
    },
    error : (err)=>{
  // console.log(err)
    }
   })
  }

}
minus(id:string , i : number){
  if(this.Data.products[i].count>1){
   this._CartService.upDataCount(id , (this.Data.products[i].count-1)).subscribe({
    next : (response)=>{
      this.Data=  response.data
      this.noOfItems = 0 ;
      for(let i = 0 ; i < response.data.products.length ; i++){
        this.noOfItems += response.data.products[i].count
      }
      this._CartService.noOfItems.next(this.noOfItems)  ;
    }
   })
  }
}
quintatity(i : number , id:string , ele?:any){
  if(ele.target.value <= this.quantity[i] && ele.target.value > 0  )
  {
   this._CartService.upDataCount(id , ele.target.value ).subscribe({
    next : (response)=>{
      this.Data=  response.data
      this.noOfItems = 0 ;
      for(let i = 0 ; i < response.data.products.length ; i++){
        this.noOfItems += response.data.products[i].count
      }
      this._CartService.noOfItems.next(this.noOfItems)  ;
    }
   })
  //  this.Data.products[i].count  = ele.target.value ;
  }
  else if (ele.target.value > this.quantity[i]){
    this._CartService.upDataCount(id , this.quantity[i] ).subscribe({
      next : (response)=>{
        this.Data=  response.data
        this.noOfItems = 0 ;
        for(let i = 0 ; i < response.data.products.length ; i++){
          this.noOfItems += response.data.products[i].count
        }
        this._CartService.noOfItems.next(this.noOfItems)  ;
      }
     })
  //  this.Data.products[i].count  =  this.quantity[i] ;
  //  ele.target.value = this.Data.products[i].count
  }
 else{
  //  ele.target.value = 1
  //  this.Data.products[i].count  = ele.target.value ;
   this._CartService.upDataCount(id , 1 ).subscribe({
    next : (response)=>{
      this.Data=  response.data
      this.noOfItems = 0 ;
      for(let i = 0 ; i < response.data.products.length ; i++){
        this.noOfItems += response.data.products[i].count
      }
      this._CartService.noOfItems.next(this.noOfItems)  ;
    }
   })

  }
}
remove(id:any){
  this._CartService.removeProduct(id).subscribe({
    next : (response)=>{
      console.log(response)
      this.Data=response.data
      this.noOfItems = 0 ;
      for(let i = 0 ; i < response.data.products.length ; i++){
        this.noOfItems += response.data.products[i].count
      }
      this._CartService.noOfItems.next(this.noOfItems)  ;
    }
  })

  console.log("kljlk")
}


}

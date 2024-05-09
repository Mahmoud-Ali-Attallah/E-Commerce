import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InterProduct } from 'src/app/shared/Interfaces/inter-product';
import { Wishlist } from 'src/app/shared/Interfaces/wishlist';
import { CartService } from 'src/app/shared/services/cart.service';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
constructor(private _getData:GetDataService , private _CartService:CartService , private TostrService:ToastrService , private _WishlistService:WishlistService  ){}
  show : boolean = true ;
  found : boolean = false ;
  searc:string = ""
  Data : InterProduct[] = [] ;
  noOfItems:number = 0 ;
  Add : boolean = false ;
  Buy : boolean = false ;
  wishList : Wishlist[] = []
  // cons : InterProduct [] = [] ;
   searhValue:string = "" ;
  noItem : number =  0 ;
   ngOnInit(): void {
    let count : number = 0 ;

    this._getData.getProduct().subscribe({
      next : (response)=>{
          this.Data = response.data
          // this.cons = this.Data ;
          console.log(this.Data)
  this.show = false ;
  ;
      },
      error: ()=>{

      }
    }
    )
    this._WishlistService.Getwishlist().subscribe({
      next :(response)=>{
    this.wishList = response.data
    this._WishlistService.noOfFav.next(this.wishList.length)
    console.log(this.wishList)
    if(this.wishList.length > 0){
      for(let i = 0 ; i < this.wishList.length ; i++ ){
for(let j = 0 ; j < this.Data.length ; j++){
  if(this.wishList[i]._id == this.Data[j].id){
    this.Data[j].Add =true
    // this.Data[i].remove =false
  }

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


  }
  value(element:any){
    this.searhValue=element.target.value
  }
  // search(element:any){
  //   this.searc = element.target.value ;
  //   if( (this.cons.filter((value : InterProduct)=>value.title.toLocaleLowerCase().includes(this.searc.toLocaleLowerCase()))).length != 0 && this.searc!="" ){
  //     this.Data = (this.cons.filter((value : InterProduct)=>value.title.toLocaleLowerCase().includes(this.searc.toLocaleLowerCase())))
  //     this.found = false ;
  //   }
  //   else if(this.searc ==""){
  //     this.Data=this.cons
  //     }
  //   else{
  //     this.Data=[] ;
  //     this.found = true ;
  //   }
  // }
  addtoCart(data:string , i :number){
    this.Data[i].Buy=true ;
    ++this.Data[i].count ;

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
  Favorite(id:string , Add:boolean , index : number){
    if(Add == true){
      this._WishlistService.RemoveProduct(id).subscribe({
next:(response)=>{
  this.Data[index].Add=false ;
  this._WishlistService.noOfFav.next(response.data.length)
  console.log(response)
  this.TostrService.success(response.message)

}
      })
    }
    else{
      this._WishlistService.AddProduct(id).subscribe({
        next :(response)=>{
          this.Data[index].Add=true ;
          this._WishlistService.noOfFav.next(response.data.length)
  console.log(response)

          this.TostrService.success(response.message)

        }
      })
    }
  }

}

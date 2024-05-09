import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
// import { Wishlist } from 'src/app/interfaces/wishlist';
import { InterProduct } from 'src/app/shared/Interfaces/inter-product';
import { Wishlist } from 'src/app/shared/Interfaces/wishlist';
import { CartService } from 'src/app/shared/services/cart.service';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
interface Categ{
createdAt : string
image: string
slug: string
updatedAt: string
_id: string
name : string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent  {
//   show : boolean = true ;
//   Categ : Categ[] = [] ;
//   constructor(private _GetDataService:GetDataService){}
//   ngOnInit(): void {
//    this._GetDataService.getCategories().subscribe({
//     next :(response)=>{
//     this.Categ = response.data
//     this.show =false
//     }
//    })
//   }
//   @Input() x : string = "" ;
//  mainOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: true,
//     pullDrag: false,
//     dots: true,
//     navSpeed: 700,
//     navText: ['', ''],
//     autoplay : true ,
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 1
//       },
//       740: {
//         items: 1
//       },
//       940: {
//         items: 1
//       }
//     },
//     nav: false
//   }
//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: true,
//     pullDrag: false,
//     dots: true,
//     navSpeed: 700,
//     navText: ['', ''],
//     autoplay : true ,
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: false
//   }

// }
export class HomeComponent {
  constructor(private _getData:GetDataService , private _CartService:CartService , private TostrService:ToastrService  , private _GetDataService:GetDataService , private _WishlistService : WishlistService  ){}
    show : boolean = true ;
    found : boolean = false ;
    searc:string = ""
    Data : InterProduct[] = [] ;
    noOfItems:number = 0 ;
    // cons : InterProduct [] = [] ;
     searhValue:string = "" ;
  Categ : Categ[] = [] ;
  // wishList:Wishlist[] = [] ;
  wishList : Wishlist[] = []



ngOnInit(): void {
  this._GetDataService.getCategories().subscribe({
    next :(response)=>{
    this.Categ = response.data
    // console.log(response)

    }
   })
this._getData.getProduct().subscribe({
  next : (response)=>{
          this.show = false ;
            this.Data = response.data ;
            // console.log(this.Data)

            // this.cons = this.Data ;
        },
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


      this.noOfItems = 0 ;
     (this._CartService.addCart(data).subscribe({
      next: (response)=> {
        // console.log(response)
        this.Data[i].Buy=true ;
        ++this.Data[i].count ;
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



     mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay : true ,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay : true ,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  }

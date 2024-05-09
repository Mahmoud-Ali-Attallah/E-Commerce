import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Data } from 'src/app/shared/Interfaces/spacific-data';
import { CartService } from 'src/app/shared/services/cart.service';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  show : boolean = true ;
  id : string|null = ""  ;
  Data : Data  = {} as Data ;
  noOfItems : number = 0 ;
  constructor( private _ActivatedRoute:ActivatedRoute , private _GetDataService : GetDataService , private _CartService:CartService , private TostrService:ToastrService ) {}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next : (param)=>{
     this.id = param.get('id') ;
     this.getData() ;
    }
  })
}
getData(){
  this._GetDataService.getSpacificProduct(this.id).subscribe({
    next : (response)=>{
      this.Data = response.data ;
      this.show = false ;
      // console.log(this.Data)
    }
  })
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
addtoCart(){
  // console.log("11313")
  this.noOfItems = 0 ;
 (this._CartService.addCart(this.id).subscribe({
  next: (response)=> {
    // console.log(response)
    // console.log("kmklj")
  this.TostrService.success(response.message)
  for(let i = 0 ; i < response.data.products.length ; i++){
    this.noOfItems += response.data.products[i].count
  }
  this._CartService.noOfItems.next(this.noOfItems)  ;
  },
  error:(response)=>{
// console.log(response)
  }
 }))  ;
}
}

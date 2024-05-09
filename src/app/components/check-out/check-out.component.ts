import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckOutService } from 'src/app/shared/services/check-out.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  id : string|null = "" ;
  cartOner : string|null = "" ;
  valid : boolean = false ;
  isvalid : boolean = false ;
constructor(private _FormBuilder:FormBuilder ,private _CheckOutService : CheckOutService , private _ActivatedRoutetiv:ActivatedRoute ){}
formData:FormGroup = this._FormBuilder.group({
  details : ['',[ Validators.required]] ,
  phone : ['',[Validators.pattern(/^01[0125][0-9]{8}$/) , Validators.required]],
  city : ['',[ Validators.required]],
})
ngOnInit(): void {
 this._ActivatedRoutetiv.paramMap.subscribe({
  next:(response)=>{
this.id = response.get('id') ;
// console.log(this.id)
// console.log(this.cartOner)
  }
 })
}
sendForm(){
  this.valid=true ;
  this.isvalid = true ;
this._CheckOutService.sendData(this.id , this.formData.value).subscribe({
  next : (response)=>{
    console.log(response)
open(response.session.url , '_self')
  },
  error : (err)=>{
// console.log(err)
// console.log("knlknlk")
  }
})
}
}

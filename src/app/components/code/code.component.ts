import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  massage:string = "" ;
  isvalid:boolean = false ;
  valid:boolean = false ;
  isvalid1:boolean = false ;
  valid2:boolean = false ;
  email:string|null = "" ;
  constructor(private _SharedDataService:SharedDataService , private TostrService:ToastrService , private _Router:Router , private _ActivatedRoutetiv:ActivatedRoute){}
ngOnInit(): void {

  this._ActivatedRoutetiv.paramMap.subscribe({
    next:(response)=>{
  this.email = response.get('email') ;
    }
   })
}
  form:FormGroup = new FormGroup({
    code : new FormControl("" , [Validators.required]) ,
  })
  RESET(){
   this.isvalid1 = true ;
    this.valid2 = true ;
    this._SharedDataService.forget(this.email).subscribe({
      next : (response)=>{
    this.TostrService.success(response.message)
    this.massage = "" ;
    this.isvalid = false
  this.valid = false
  this.isvalid1 = false ;
  this.valid2 = false ;
  console.log(response)
      }
  })
  }
  forget(){
    this.isvalid = true ;
   this.valid = true ;
     console.log(this.form.get('email')?.value) ;
     this._SharedDataService.Code(this.form.get('code')?.value).subscribe({
       next : (response)=>{
         this.isvalid = false
         this.valid = false
     this.TostrService.success(response.status)
    //  this._Router.navigate(['/resetpassword'])
    this._Router.navigate(['/resetpassword',this.email])
   console.log(response)
       },
       error : (response)=>{
         console.log(response)
   console.log(this.massage)
         if(response.statusText == "Unknown Error"){
           this.massage = response.statusText
         }
         else{

           this.massage = response.error.message
         }

       }
     })
   }
  close(){
    this.massage = "" ;
    this.isvalid = false
  this.valid = false
  }
}

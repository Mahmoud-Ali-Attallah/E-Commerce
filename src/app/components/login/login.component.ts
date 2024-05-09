import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _SharedDataService : SharedDataService , private _Router:Router , private _FormBuilder:FormBuilder){}
Error:string = "" ;
isvalid:boolean = false ;
valid:boolean = false ;

// formLogin:FormGroup = this._FormBuilder.group({
//   email:["",Validators.email , Validators.required] ,
//   password:["",Validators.required , Validators.pattern(/^\w{5,}$/)]
// }) ;


formLogin : FormGroup = new FormGroup({
email : new FormControl("",[Validators.email , Validators.required]),
password : new FormControl("",[ Validators.required , Validators.pattern(/^\w{5,}$/)]),

}) ;
sendData(){
  this.isvalid = false
  this.valid = true
this._SharedDataService.setLogin(this.formLogin.value).subscribe({
  next:(response)=>{
    localStorage.setItem('Token' , response.token)
    // console.log(response.token)
    // console.log(localStorage.getItem('Token'))
    this._Router.navigate(['/home'])
    this.isvalid = false
    this.valid = false
  },
//   error:(err:HttpErrorResponse)=>{
  // if(err.error.message == "fail"){
    //   this.isvalid = false
    //     this.valid = false
    //   // this.Error = err.error.message
      // console.log(err.error.message)
    // }
    //   }
    error:(err : HttpErrorResponse)=>{
  this.formLogin.markAllAsTouched() ;
// console.log(err)
  this.isvalid = false
    this.valid = false
  this.Error = err.error.message
}
})
} ;






close(){
  this.Error = "" ;
  this.isvalid = false
this.valid = false
}
}

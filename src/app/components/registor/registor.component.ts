import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent {

  constructor(private _SharedDataService : SharedDataService , private _Router:Router){}
Error:string = "" ;
isvalid:boolean = false ;
valid:boolean = false ;
login(){
  this._Router.navigate(['/Login'])

}
formRegistor : FormGroup = new FormGroup({
name : new FormControl("", [ Validators.required ,Validators.pattern(/^([a-z]|[A-Z]){3,}$/)]),
email : new FormControl("",[Validators.email , Validators.required]),
phone : new FormControl("",[Validators.pattern(/^01[0125][0-9]{8}$/) , Validators.required]),
password : new FormControl("",[ Validators.required , Validators.pattern(/^\w{5,}$/)]),
rePassword : new FormControl("" ,),
} , {validators:[this.confirmPassword]} as FormControlOptions) ;
sendData(){
  this.isvalid = true
  this.valid = true
this._SharedDataService.setRegister(this.formRegistor.value).subscribe({
  next:(response)=>{

    // console.log(response)
    this._Router.navigate(['/Login'])
    this.isvalid = false
    this.valid = false
  },
  error:(err:HttpErrorResponse)=>{
this.Error = err.error.message
  }
})
} ;
close(){
  this.Error = "" ;
  this.isvalid = false
this.valid = false
}

confirmPassword(formGroup :FormGroup){
if(formGroup.get('rePassword')?.value == ""){
  formGroup.get('rePassword')?.setErrors({required : true})
}
else if (formGroup.get('rePassword')?.value != formGroup.get('password')?.value){
  formGroup.get('rePassword')?.setErrors({mistake:true})
}
}
}

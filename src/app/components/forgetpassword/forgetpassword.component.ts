import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
massage:string = "" ;
isvalid:boolean = false ;
valid:boolean = false ;
constructor(private _SharedDataService:SharedDataService , private TostrService:ToastrService , private _Router:Router){}
form:FormGroup = new FormGroup({
  email : new FormControl("" , [Validators.required , Validators.email]) ,
})
forget(){
 this.isvalid = true ;
this.valid = true ;
  console.log(this.form.get('email')?.value) ;
  this._SharedDataService.forget(this.form.get('email')?.value).subscribe({
    next : (response)=>{
      this.isvalid = false
      this.valid = false
  this.TostrService.success(response.message)
  this._Router.navigate(['/code' , this.form.get('email')?.value ])


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

import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  massage:string = "" ;
  isvalid:boolean = false ;
  valid:boolean = false ;
  isvalid1:boolean = false ;
  valid2:boolean = false ;
  email:string|null = "" ;
  // confirmPassword:string = "" ;
  constructor(private _SharedDataService:SharedDataService , private TostrService:ToastrService , private _Router:Router , private _ActivatedRoutetiv:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoutetiv.paramMap.subscribe({
      next:(response)=>{
    this.email = response.get('email') ;
      }
     })
  }
  // form:FormGroup = new FormGroup({
  //   Password : new FormControl("" , [Validators.required]) ,
  // })
  form : FormGroup = new FormGroup({
    name : new FormControl("",[ Validators.required]),
    email : new FormControl("",[ Validators.required , Validators.email]),
    phone : new FormControl("" , [Validators.pattern(/^01[0125][0-9]{8}$/) , Validators.required]),
    }) ;

      update(){
        this.isvalid = true ;
       this.valid = true ;
        //  console.log(this.form.get('email')?.value) ;
         this._SharedDataService.uPdateData(this.form.get('name')?.value , this.form.get('email')?.value , this.form.get('phone')?.value).subscribe({
           next : (response)=>{
             this.isvalid = false
             this.valid = false
         this.TostrService.success("Succes")
        //  localStorage.setItem('Token' , response.token)
        //  this._Router.navigate(['/home'])
       console.log(response)
           },
           error : (response)=>{
             console.log(response)
      //  console.log(this.massage)
             if(response.status == 400){
               this.massage = response.error.errors.msg
             }
             else if(response.status == 401){
              this.massage = response.error.message
            }
            //  else{
            //    this.massage = response.error.message
            //  }

           }
         })
       }
      close(){
        this.massage = "" ;
        this.isvalid = false
      this.valid = false
      }
}

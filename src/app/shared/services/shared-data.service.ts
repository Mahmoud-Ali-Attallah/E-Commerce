import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  token : any   = {token : localStorage.getItem('Token')}
  Data : any ;
  constructor(private _HttpClient : HttpClient , private _Router:Router){
  }
signout(){
    localStorage.removeItem('Token')
  localStorage.removeItem('cartOner') ;

    this._Router.navigate(['/Login'])
}
userData(){
  if(localStorage.getItem('Token') != null){
let data : any= localStorage.getItem('Token') ;
this.Data = jwtDecode(data)
  }
}
setRegister(UserData:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` ,UserData ) ;
}
setLogin(UserData:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` ,UserData ) ;
}
forget(emil:string|null):Observable<any>{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email:emil})
}
Code(code:string):Observable<any>{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {resetCode : code})
}
restPasswoed(email:string|null ,newPassword:string ):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,{email : email , newPassword : newPassword})
}
uodatePassword(currentPassword:string , password:string , rePassword:string):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword` , {currentPassword:currentPassword , password:password , rePassword:rePassword  }  ,{headers : this.token  } )
}
uPdateData(name:string , email:string , phone:string):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/users/updateMe/` , {name:name , email:email , phone:phone  }  ,{headers : this.token  } )
}
}



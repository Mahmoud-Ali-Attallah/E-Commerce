import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CheckOutService {
  token : any   = {token : localStorage.getItem('Token')}
  constructor(private _HttpClient:HttpClient) { }
  sendData(id:string|null , UserData : any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200` , {shippingAddress : UserData } , {headers : this.token  })
  }
  userOrder():Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${localStorage.getItem('cartOner')}`)
  }
}

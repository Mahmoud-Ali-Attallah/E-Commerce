import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  noOfItems : BehaviorSubject<number > = new BehaviorSubject(0) ;
token : any   = {token : localStorage.getItem('Token')}
  constructor(private _httpClient : HttpClient) { }
  addCart(data:string|null) : Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart` ,  {productId: data} ,{headers : this.token  })
  }
  displayCart():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart' , {headers : this.token  } )
  }
  removeProduct(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {headers : this.token  } )
  }
  upDataCount(id:string , num:number):Observable<any>{
    // console.log(num.toString());
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {count: num} , {headers : this.token  })
  }
}
interface header{
  // token : string|null|string[]
  token: string| string[] | null;

}

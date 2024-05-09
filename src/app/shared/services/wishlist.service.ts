import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  noOfFav : BehaviorSubject<number> = new BehaviorSubject(0) ;
  token : any   = {token : localStorage.getItem('Token')}

  constructor(private _httpClient : HttpClient) { }
  AddProduct(id : string):Observable<any>{
   return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , {productId : id} , {headers : this.token  } )
  }
  RemoveProduct(id : string):Observable<any>{
return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` , {headers : this.token  }  )
  }
  Getwishlist():Observable<any>{
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , {headers : this.token  } )

  }
}

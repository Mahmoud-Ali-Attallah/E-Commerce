import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _HttpClient:HttpClient) { }

  getProduct():Observable<any>{
   return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products');
  }
  getSpacificProduct(id:string|null):Observable<any>{
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getCategories():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
getBrands():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
}

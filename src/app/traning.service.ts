import { Injectable } from '@angular/core';
import { GetDataService } from './shared/services/get-data.service';

@Injectable({
  providedIn: 'root'
})
export class TraningService {
  name : string = "" ;
  age : number = 0 ;
  constructor( private _GetDataService:GetDataService){

  }


}

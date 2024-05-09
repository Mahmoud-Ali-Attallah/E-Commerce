import { Component, Input } from '@angular/core';
import { GetDataService } from 'src/app/shared/services/get-data.service';
interface Brand {
image : string ,
name : string ,
}
@Component({

  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  Categ : Brand[] = [] ;
  show : boolean = true ;


constructor(private _GetDataService:GetDataService ){}
ngOnInit(): void {
  this._GetDataService.getBrands().subscribe({
    next : (response)=>{
      this.Categ = response.data
   this.show  = false ;


    }
  })

}
}

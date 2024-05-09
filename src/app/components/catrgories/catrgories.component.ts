import { Component, Input } from '@angular/core';
import { GetDataService } from 'src/app/shared/services/get-data.service';
interface Categ{
  createdAt : string
  image: string
  slug: string
  updatedAt: string
  _id: string
  name : string
  }
@Component({
  selector: 'app-catrgories',
  templateUrl: './catrgories.component.html',
  styleUrls: ['./catrgories.component.css']
})
export class CatrgoriesComponent {
  Categ : Categ[] = [] ;
  show : boolean = true ;


constructor(private _GetDataService:GetDataService ){}
ngOnInit(): void {
  this._GetDataService.getCategories().subscribe({
    next : (response)=>{
      this.Categ = response.data
   this.show  = false ;

    }
  })

}

}

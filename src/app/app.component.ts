import { Observable, Subscription } from 'rxjs';
import { SharedDataService } from './shared/services/shared-data.service';
import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'Assignmet1';
  name = "mahmoud" ;
}
  // constructor(private _SharedDataService: SharedDataService){}
  // Data : any [] = [] ;
  // subs! : Subscription ;
  // ngOnInit(): void {
  //  this.subs = this._SharedDataService.getPizaa().subscribe({
  //     next : (data)=>{
  // this.Data =data.recipes
  //     } ,
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.subs.unsubscribe()
  // }

// }



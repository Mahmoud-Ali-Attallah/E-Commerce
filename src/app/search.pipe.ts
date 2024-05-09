import { Pipe, PipeTransform } from '@angular/core';
import { InterProduct } from './shared/Interfaces/inter-product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  Data : InterProduct[] = [] ;
  cons : InterProduct [] = [] ;
  transform(args: InterProduct[] , searc: string): InterProduct[] {



    // console.log(this.cons.filter((value : InterProduct)=> {return value.title.toLocaleLowerCase().includes(searc.toLocaleLowerCase())}))




    // console.log(this.cons.filter((value : InterProduct)=>{return value.title.toLocaleLowerCase().includes(searc.toLocaleLowerCase())}))













    this.cons = args ;
    if( (this.cons.filter((value : InterProduct)=>value.title.toLocaleLowerCase().includes(searc.toLocaleLowerCase()))).length != 0 && searc!="" ){
      this.Data = (this.cons.filter((value : InterProduct)=>value.title.toLocaleLowerCase().includes(searc.toLocaleLowerCase())))
    }
    else if(searc ==""){
      this.Data=this.cons
      }
    else{
      this.Data=[] ;
    }
    return this.Data;
  }
}

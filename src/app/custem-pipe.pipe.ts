import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custemPipe'
})
export class CustemPipePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {

      return value.split(' ').slice(args[0],args[1]).join(" ");

  ;
  }

    // transform(value: string, startIndex: number , length : number): string {

    //     return value.split(' ').slice(startIndex,length).join(" ");

    // ;
    // }
  }



import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
}) 
// export class CapitalizePipe implements PipeTransform { 
//   transform(value:any) { 
//    if (value) { 
//     return value.charAt(0).toUpperCase() + value.slice(1); 
//     } return value; 
//   } 
// }
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
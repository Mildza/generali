import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'mydate'
}) 
// export class CapitalizePipe implements PipeTransform { 
//   transform(value:any) { 
//    if (value) { 
//     return value.charAt(0).toUpperCase() + value.slice(1); 
//     } return value; 
//   } 
// }
export class DatePipe implements PipeTransform {
   transform(value: string, args: string[]): any {
    
    
    var datum = moment(value).format('L')
    
    return datum

    // if (value) {
    //         var date = value instanceof Date ? value : new Date(value);
    //         return DateFormatter.format(date, 'pt', 'dd/MM/yyyy');
    //     }
  }
}
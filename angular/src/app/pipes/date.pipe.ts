import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'mydate'
}) 

export class DatePipe implements PipeTransform {
   transform(value: string, args: string[]): any {
  
    var datum = moment(value).format('L')
    
    return datum

  }
}
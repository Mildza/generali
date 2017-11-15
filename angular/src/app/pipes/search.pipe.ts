import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(result: any, firstname: any, count:any): any {
    if (firstname === undefined) return result
    return result.filter(function(client){
       return client.firstname.toLowerCase().includes(firstname.toLowerCase())
        
    })
  }

}

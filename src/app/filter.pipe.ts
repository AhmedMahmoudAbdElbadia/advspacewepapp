import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(req: any, args?: any): any {
    if (args===undefined) return [];
    return req.filter(res=>{
      return res.CompanyName===args
    })
  }

}

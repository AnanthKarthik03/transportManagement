import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2',
})
export class Filter2Pipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter((search: any) => {
      return search.consignee_name.indexOf(searchTerm) > -1;
    });
  }
}

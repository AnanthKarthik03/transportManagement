import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter3',
})
export class Filter3Pipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter((search: any) => {
      return (
        search.cn_no.indexOf(searchTerm) > -1 ||
        search.consignee.indexOf(searchTerm) > -1 ||
        search.delivery_through.indexOf(searchTerm) > -1
      );
    });
  }
}

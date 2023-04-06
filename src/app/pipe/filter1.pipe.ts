import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1',
})
export class Filter1Pipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter((search: any) => {
      return search.consigner_name.indexOf(searchTerm) > -1;
    });
  }
}

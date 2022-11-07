import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObject',
})
export class FilterObjectPipe implements PipeTransform {
  transform(value: any[], filterText: string, filterKey: string): any[] {
    return value.filter((item) =>
      (item[filterKey] as string)
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
  }
}

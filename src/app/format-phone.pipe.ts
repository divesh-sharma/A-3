import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (!value) return value;
    let arr = value.split(' ').join('');
    return arr;
  }
}

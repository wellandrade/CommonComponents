import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascaraCPF'
})
export class MascaraCPFPipe implements PipeTransform {

  transform(value: string): string {

    if (value.length === 11) {
      return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
    }

    return value;

  }

}

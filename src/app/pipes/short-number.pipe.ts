import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {

    if (isNaN(value)) return null; //work only if value is a number
    if(value === null) return null;
    if (value === 0) return 0;

    let abs = Math.abs(value);
    const rounder = Math.pow(10,1);
    const isNegative= value <0; // will also work of negative number

    let key = '';

    const powers = [
      {key:'K', value : 1000}
    ];

    for (let i = 0; i<powers.length; i++){
      let reduced = abs / powers[i].value;
      reduced = Math.round (reduced*rounder) / rounder;

      if (reduced >=1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }

    return (isNegative ? '-' : '') + abs + key;
  }

}

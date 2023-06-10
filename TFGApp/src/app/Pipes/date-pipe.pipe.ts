import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string{
    if(value){
      let array=value.split('-');
      return `${array[2]}/${array[1]}/${array[0]}`;
    }
    return '';
  }

}

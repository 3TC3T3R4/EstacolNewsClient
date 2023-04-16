import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'trasform'
})
export class TrasformPipe implements PipeTransform {

  transform(value: number ): void{
    moment().format('MMMM Do YYYY, h:mm:ss a');
  }


}



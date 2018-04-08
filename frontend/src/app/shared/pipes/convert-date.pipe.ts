import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    moment.locale('ru');
    return moment(value).format(args);
  }
}

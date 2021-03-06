import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { CarDetails } from '../models/cardetails';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetails[], filterText:string): CarDetails[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetails)=>c.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }


}

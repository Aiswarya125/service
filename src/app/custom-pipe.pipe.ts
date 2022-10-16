import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, name:string):string {
    return 'First Name : '+name;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(firstName: any[], filterString: string, propName:any): any {

    const result:any=[]

    if(!firstName || filterString==''|| propName==''){
      return firstName
    }


    firstName.forEach((name:any)=>{
      if(name[propName].trim().toLowerCase().includes(filterString.toLowerCase())){

        result.push(name)
      }
    })
    return result;
  }

}

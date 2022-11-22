import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDetail'
})
export class UserDetailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

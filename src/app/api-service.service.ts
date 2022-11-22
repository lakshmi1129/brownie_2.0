import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

    // Search box element
    search =new BehaviorSubject("")

  constructor(private api:HttpClient) { }

  getUsers(){
    return this.api.get('https://dummyjson.com/users')
  }

  viewUser(userId:any){
    return this.api.get('https://dummyjson.com/users/'+userId)
  }
}

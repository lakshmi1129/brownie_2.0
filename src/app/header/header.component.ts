import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search ="Enter First Name"

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
  }

  
    searchTerm(event:any){
      console.log(event.target.value);
      let searchKey =event.target.value
      this.api.search.next(searchKey)
      
      }

}

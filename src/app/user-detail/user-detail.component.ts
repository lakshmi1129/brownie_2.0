import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  Userid:number=0
  userDetails:any={}

  constructor(private api:ApiServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((result)=>{
      this.Userid=result['id']
      console.log(this.Userid);
      
    })

    this.api.viewUser(this.Userid)
      .subscribe((result)=>{
        console.log(result);
        
        this.userDetails =result
        // console.log(this.userDetails);
        
      })
  }

}

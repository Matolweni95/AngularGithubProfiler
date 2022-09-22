import { Component, destroyPlatform, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: ServiceService) { }

  username!:any;

  details:any = [];
  placeholder!:any;

  getDetails(name: any){
    this.placeholder = this.username;
    this.http.getUserDetails(name).subscribe((res:any) => {
    this.details.push(res);
    console.log(this.details)
    })
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getDetails(this.username);
    console.log(this.username);
  }

}

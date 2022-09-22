import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:ServiceService) { }
  username!:any
  placeholder!:any;
  followers:any = [];
  pages:any = [];


  i = 1 ;

  Next(){
    this.i++;
    this.http.getUserFollowers(this.username, this.i).subscribe((res: any) => {
    this.pages = res;
    this.followers = this.pages;
    console.log(res)
    })
  }

  getFollowers(name: any, i: any){
    this.placeholder = this.username;
    this.http.getUserFollowers(name, this.i).subscribe((res:any) => {
    this.followers = res;
    console.log(this.followers)
    })
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getFollowers(this.username, this.i)
    console.log(this.username);
  }
 

}

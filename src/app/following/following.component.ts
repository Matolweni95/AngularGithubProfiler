import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:ServiceService) { }
  username!:any
  following:any = [];
  pages:any = [];


  i = 1 ;

  Next(){
    this.i++;
    this.http.getUserFollowing(this.username, this.i).subscribe((res: any) => {
    this.pages = res;
    this.following = this.pages;
    console.log(res)
    })
  }

  Back(){
    this.i--;
    if(this.i <= 0){
      this.i = 1
    }
    this.http.getUserFollowing(this.username, this.i).subscribe((res: any) => {
      this.pages = res;
      this.following = this.pages;
      console.log(res)
      })
  }

  getFollowing(name: any, i:any){
    this.http.getUserFollowing(name, i).subscribe((res:any) => {
    this.following = res;
    console.log(this.following)
    })
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getFollowing(this.username, this.i)
    console.log(this.username);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css']
})
export class GistsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:ServiceService) { }
  username!:any
  gists:any = [];
  pages:any = [];


  i = 1 ;

  Next(){
    this.i++;
    this.http.getUserGists(this.username, this.i).subscribe((res: any) => {
    this.pages = res;
    this.gists = this.pages;
    console.log(res)
    })
  }

  Back(){
    this.i--;
    if(this.i <= 0){
      this.i = 1
    }
    this.http.getUserGists(this.username, this.i).subscribe((res: any) => {
    this.pages = res;
    this.gists = this.pages;
    console.log(res)
    })
  }

  getGists(name: any, i:any){
    this.http.getUserGists(name, i).subscribe((res:any) => {
    this.gists = res;
    console.log(this.gists)
    })
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getGists(this.username, this.i)
    console.log(this.username);
  }

}

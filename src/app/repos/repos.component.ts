import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:ServiceService) { }
  username!:any
  repos:any = [];
  pages:any = [];


  i = 1 ;

  Next(){
    this.i++;
    this.http.getUserRepos(this.username, this.i).subscribe((res: any) => {
    this.pages = res;
    this.repos = this.pages;
    console.log(res)
    })
  }

  Back(){
    this.i--;
    if(this.i <= 0){
      this.i = 1
    }
    this.http.getUserRepos(this.username, this.i).subscribe((res: any) => {
    this.pages = res;
    this.repos = this.pages;
    console.log(res)
    })
  }


  getRepos(name: any, i:any){
    this.http.getUserRepos(name, i).subscribe((res:any) => {
    this.repos = res;
    console.log(this.repos)
    })
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getRepos(this.username, this.i)
    console.log(this.username);
  }

}

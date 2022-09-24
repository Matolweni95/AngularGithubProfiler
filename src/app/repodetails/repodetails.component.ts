import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:ServiceService) { }
  username!:any
  repo!:any;
  placeholder!:any;
  repodetails:any = [];
  details:any = [];

  myDate: Date = new Date();

  getRepoDetails(name: any, repo:any){
    this.placeholder = this.username;
    this.http.getRepoDetails(name, repo).subscribe((res:any) => {
    this.repodetails = res;
    this.details.push(this.repodetails)
    console.log(this.details)
    })
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username')
    this.repo = this.activatedRoute.snapshot.paramMap.get('repo')
    this.getRepoDetails(this.username, this.repo)
    console.log(this.username);
  }

}

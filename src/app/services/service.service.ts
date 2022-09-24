import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  //using environment file to store the url
  url = environment.baseUrl

  //fetch Users
  getUserList(){
    return this.http.get(this.url)
  }

  Page(value: any){
    return this.http.get(`https://api.github.com/search/users?q=test&page=${value}&per_page=10`)
  }

  //get user details
  getUserDetails(name: any){
    return this.http.get(`https://api.github.com/users/${name}`)
  }

  getUserFollowers(name:any, value:any){
    return this.http.get(`https://api.github.com/users/${name}/followers?q=test&page=${value}&per_page=10`)
  }

  getUserFollowing(name:any, value:any){
    return this.http.get(`https://api.github.com/users/${name}/following?q=test&page=${value}&per_page=10`)
  }

  getUserRepos(name:any, value:any){
    return this.http.get(`https://api.github.com/users/${name}/repos?q=test&page=${value}&per_page=10`)
  }

  getUserGists(name:any, value:any){
    return this.http.get(`https://api.github.com/users/${name}/gists?q=test&page=${value}&per_page=10`)
  }

  getRepoDetails(name:any, reponame:any){
    return this.http.get(`https://api.github.com/repos/${name}/${reponame}`)
  }
  
}

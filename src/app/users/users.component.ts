import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormGroup,  FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: ServiceService, private _fb: FormBuilder) { 
    
  }

  users:any = [];
  usertest:any = [];

  getUsers() {
    this.http.getUserList().subscribe((res:any) => {
      this.users = res.items;
      console.log(this.users)
    })
  }

  i = 1 ;

  Next(){
    this.i++;
    this.http.Page(this.i).subscribe((res: any) => {
    this.usertest = res.items
    this.users = this.usertest;
    console.log(this.usertest)
    })
  }

  search(){

  }

  ngOnInit(): void {
    this.getUsers();
  }

}

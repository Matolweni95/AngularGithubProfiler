import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: ServiceService, private _fb: FormBuilder) { 
    
  }

  search: FormControl = new FormControl('');

  users:any = [];
  userArr:any = [];

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
    this.userArr = res.items
    this.users = this.userArr;
    console.log(this.userArr)
    })
  }

  Back(){
    this.i--;

    if(this.i <= 0){
      this.i = 1;
    }
    this.http.Page(this.i).subscribe((res: any) => {
    this.userArr = res.items
    this.users = this.userArr;
    console.log(this.userArr)
    })
  }

  Search(){
    const value = this.search.value;
    console.log(value)
  }

  ngOnInit(): void {
    this.getUsers();
  }

}

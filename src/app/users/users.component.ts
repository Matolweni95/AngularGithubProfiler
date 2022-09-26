import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  FormGroup!: FormGroup;

  constructor(private http: ServiceService, private fb: FormBuilder, private router: Router) { 
    this.FormGroup = this.fb.group({
      search: ['', Validators.required]
    });
    
  }

  users:any = [];
  userArr:any = [];
  searchedUser:any;

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

  search(FormGroup: { value: { search: any }})
  {    
    if(FormGroup.value.search === ''){
      alert('Please enter a avalid username')
    }else if(FormGroup.value.search != ''){
    this.http.searchUser(FormGroup.value.search).subscribe((res:any) => {
      this.searchedUser = res.login;
      this.router.navigateByUrl('/' + this.searchedUser)
      console.log(this.searchedUser)
    },(error:any)=>{
      if(error.status === 404) {
        alert('User does not exist, please try valid username')
      }
    })
  }
  }

  ngOnInit(): void {
    this.getUsers();
  }

}

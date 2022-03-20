import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MyapiService } from '../myapi.service';
import { LoginDetails } from './login-details';
import userData from '../users.json';
import * as _ from 'lodash';
import { Router } from '@angular/router';

//working on it dont change anything
interface User{
  id:Number;
  username:String;
  Password:String;
  Role:String;
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private router:Router, private api: MyapiService ) { }
  userLogins= new FormGroup({
    UserName:new FormControl(),
    Password: new FormControl('')
  })
  ngOnInit(): void {
  }
users:User[]=userData;
  //loginModel= new LoginDetails("","");
  validateUser(){
    console.log(this.userLogins)
//this.userName.setValue(userName);
  }
  public valid=false;
  onSubmit(){
    // console.warn(this.userLogins.value);
    // console.warn(this.userLogins.controls['UserName'].value);//getting single value from the form
    // console.log(this.userLogins.get('Password')?.value);
    // console.log(this.api.db[0].username);
    //this.api.db[0].username = 'tdrydrtfgj'
  //   console.log(this.api.db[0].username);
  //  console.log( this.api.db[0]);
  //  console.log("=====================");
   //console.log(this.users  )
  let validUser=_.find(this.users, user => user['username']===this.userLogins.get('UserName')?.value && user['Password']===this.userLogins.get('Password')?.value);
if(validUser!=undefined){
this.valid=true;
this.navSearch();
}
  // let validUser=_.find(this.users,{'username':this.userLogins.get('UserName')});
console.log(validUser)
  }
   navSearch() {
  //   this.router.navigate(['/manageEmployees']);
  this.router.navigateByUrl('/manageEmployees');
  }
}
export class NameEditorComponent {
  name = new FormControl('');
}

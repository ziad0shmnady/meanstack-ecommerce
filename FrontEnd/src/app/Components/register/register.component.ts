import { User } from './../../interfaces/user';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errors: { msg: string; }[] = [{msg:""}];
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
  }
  
  onUserRegister(user: User) {
    this.httpclient.post(`${environment.apiURL}/postregister`, user).subscribe((response:any) => {
      this.errors = response["errors"]
    });
  }
}

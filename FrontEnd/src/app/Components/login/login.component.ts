import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={
    email:'',
    password: ''
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user.email,this.user.password).subscribe(data=>{
      console.log(data)
    },
    err =>{
      console.log(err)
    })
  }

}

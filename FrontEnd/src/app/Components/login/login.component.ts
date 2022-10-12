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
  message:string = ''

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user.email,this.user.password).subscribe((data:any)=>{
      let id = data['user']._id
      localStorage.setItem('id',id);
      window.location.href = `/home`
    },
    err =>{
      if(err.status === 401){
        this.message = 'Invalid UserName Or Password'
      }
      console.log(err.status)
    })
  }

}

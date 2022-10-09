import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerURL: string = 'http://localhost:4000/postregister';
  constructor(private registerpost: HttpClient) {}

  ngOnInit(): void {}
  onUserRegister(user: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    password2: string;
  }) {
    console.log(user);
    this.registerpost.post(this.registerURL, user).subscribe((response) => {
      console.log(response);
    });
  }
}

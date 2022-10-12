import { ApitestService } from './../services/Api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  id:string | null = ''
  constructor( private apitest: ApitestService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
      this.apitest.getUserById(this.id ).then((data: any) => {
        this.user = data;
      });
  }

}

import { ApitestService } from '../../services/Api.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  constructor(private apitest:ApitestService) { }

  ngOnInit(): void {
    
  }

}

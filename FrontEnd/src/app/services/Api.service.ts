import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {

  constructor(private httpclient:HttpClient) { }

  getData(){
    return this.httpclient.get(environment.apiURL)
  }
  getProductById(id: string): any {
    return this.httpclient.get(`${environment.apiURL}${id}`);
  }
}

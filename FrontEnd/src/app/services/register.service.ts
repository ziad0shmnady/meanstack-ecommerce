import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  registerURL: string = 'http://localhost:4000/postregister';
  constructor(private httpClient: HttpClient) {
  }
  
}

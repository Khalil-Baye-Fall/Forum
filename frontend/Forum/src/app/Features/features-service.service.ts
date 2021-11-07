import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  baseUrl = 'http://127.0.0.1:8000/base/';

  constructor(
    private http: HttpClient,
    private authService: AuthServiceService,
    private route: Router
  ) { }


  CreateTopic(model:any){
    return this.http.post(this.baseUrl + 'create-topic/', model, {headers: this.authService.getAuthHeaders(),  responseType: 'json'}).toPromise();
  }

  GetTpoics(){
    return this.http.get(this.baseUrl + 'topic-list/', {headers: this.authService.getAuthHeaders()}).toPromise();
  }

 
}

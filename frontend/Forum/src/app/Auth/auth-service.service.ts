import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://127.0.0.1:8000/base/';


  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  
  logIn(model: any) {
  
    return this.http.post(this.baseUrl + 'login/auth/token/', model, httpOptions).pipe(
      map((response: any) => {
        const user = response;
        if (user && user.token) {   
          localStorage.setItem('token', user.token);          
        }
        return user;
        
      })
    );

  }


  Register(model: any){
    return this.http.post(this.baseUrl + 'register/', model);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  SignOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/home']);
    window.location.reload();
    return false;

  }

  getAuthHeaders(): HttpHeaders{
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Token ${localStorage.getItem('token')}`);
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

}

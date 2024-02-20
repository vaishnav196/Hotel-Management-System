import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url="http://localhost:8080/auth/login"
//  private tokenkey='Token';
  constructor(private http:HttpClient) { }

  login(credentials:any): Observable<any>{
    return this.http.post(`${this.url}`,credentials);
  }

  saveToken(jwtToken:string):void{
    localStorage.setItem('token',jwtToken);
  }

  getToken():string |null{
    return localStorage.getItem('token');

  }
  logout(){
   localStorage.removeItem('token');
  }

// isLoggedIn(){
//   return 
// }


}

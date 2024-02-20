import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
// private url="http://localhost:8080/{cartId}/product/{productId}"
  // addToCart( cartId:number,productId:number):Observable<any>{
  //   return this.http.post<any>(`http://localhost:8080/${cartId}/product/${productId}`,{});
  // }
}

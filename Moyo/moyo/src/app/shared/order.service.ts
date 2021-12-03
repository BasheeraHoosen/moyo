import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = 'https://localhost:44351/api/order/'

  constructor( private http: HttpClient ) { }

  ReadOrders(id:number){
    return this.http.get(this.apiUrl + 'order/' + id);
  }

  ReadProducts(){
    return this.http.get(this.apiUrl + 'products');
  }

  PostOrder(obj :  any){
    return this.http.post(this.apiUrl + 'neworder', obj);
  }

  PostOrderLine(obj :  any){
    return this.http.post(this.apiUrl + 'orderline', obj);
  }
}

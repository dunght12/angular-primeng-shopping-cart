import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:3000/datas';
  constructor(private http: HttpClient) {}
  getProductInBasket(): Observable<any> {
    // return this.http
    //   .get<any>(this.baseUrl)
    //   .toPromise()
    //   .then((res) => <Product[]>res.datas)
    //   .then((datas) => {
    //     return datas;
    //   });
    return this.http.get<any>(this.baseUrl);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  update(data: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/${data.id}`, data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
  products: any;
  error: any;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getProducts() {
    return this.http.get('/products', {observe: 'response'});
  }

  addProduct(newProduct) {
    console.log('Add product called ');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('/products', JSON.stringify(newProduct), httpOptions);
  }

}

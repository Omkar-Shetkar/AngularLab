import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private auth: AuthService) { }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
  }

  getCategories() {
    return this.http.get<any[]>(`${this.url}/categories`, { headers: this.getHeaders() });
  }

  getProductsByCategory(id: number) {
    return this.http.get<any[]>(`${this.url}/products/filter?categoryId=${id}`, { headers: this.getHeaders() });
  }

  getAllProducts() {
    return this.http.get<any[]>(`${this.url}/products`, { headers: this.getHeaders() });
  }
}

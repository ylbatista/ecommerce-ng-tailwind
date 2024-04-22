import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl: string = environments.api_URL;

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAllProducts():Observable<any> {
    return this.http.get<any>(` ${this.apiUrl}/products `);
  }
  

}

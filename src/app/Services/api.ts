import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  BASEURL = "https://fakestoreapi.com/products";
  private readonly http = inject(HttpClient)

  getAllProducts() {
    return this.http.get(this.BASEURL);
  }
}

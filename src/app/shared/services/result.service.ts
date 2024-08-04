import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { prodacturl } from '../consts';
import {
  Allprodacts,
  category,
  comments,
  posts,
  prodactss,
  products,
  ps,
} from '../interfaces/carservise';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  readonly user$ = new Subject<string>();
  readonly userstream$ = this.user$.asObservable();
  private readonly http = inject(HttpClient);

  private readonly Baseurl = `${prodacturl}/products`;
  private readonly comment = `${prodacturl}/comments`;

  getcars() {
    return this.http.get<category[]>(`${this.Baseurl}/categories`);
  }

  getfomrs(id: number, limit: number) {
    return this.http.get<Allprodacts>(
      `${this.Baseurl}?limit=${limit}&skip=${id}`
    );
  }
  getprudacts(id: string) {
    return this.http.get<Allprodacts>(`${this.Baseurl}/category/${id}`);
  }
  postproducts(id: string) {
    return this.http.get<Allprodacts>(`${this.Baseurl}/search?q=${id}`);
  }
  getproductsss(id: string) {
    return this.http.get<Allprodacts>(`${this.Baseurl}/${id}`);
  }
  getcoments() {
    return this.http.get<comments>(`${this.comment}?limit=10`);
  }
  getcomentss(id: number) {
    return this.http.get<comments>(`${this.comment}?limit=1&skip=${id}`);
  }
  deletproduct(id:number){
    return this.http.delete<products>(`${this.Baseurl}/${id}`)
  }
}

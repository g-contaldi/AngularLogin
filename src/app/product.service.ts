import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "./util";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getList() {
    return this.http.get<Array<any>>(BACKEND_URL + '/product/getAll');
  }

}

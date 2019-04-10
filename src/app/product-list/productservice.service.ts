import { endPoints } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductserviceService {
  url = endPoints.url + "prod";
  constructor(private _http: HttpClient) {}
  getAllProducts() {
    return this._http.get<Product[]>(this.url);
  }
}

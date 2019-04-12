import { endPoints } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductCategoryJoin } from "./productCategory";


@Injectable({
  providedIn: "root"
})
export class ProductserviceService {
  url = endPoints.url + "products";
  constructor(private _http: HttpClient) {}
  getAllProducts() {
    return this._http.get<ProductCategoryJoin[]>(this.url);
  }
}

import { endPoints } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductCategoryJoin } from "./productCategory";
import { Category } from "./category";
import { Product } from "./product";
import { identifierName } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})

export class ProductserviceService {

  url = endPoints.url + "products/";
  categoryURL=endPoints.url+"category/";

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get<ProductCategoryJoin[]>(this.url);
  }
  getProductById(id:number) {
    return this._http.get<ProductCategoryJoin[]>(this.url+id);
  }
  getAllCategories(){
    return this._http.get<Category[]>(this.categoryURL);
  }

  deleteProducts(arrIds) {
    let header=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + 'delete', arrIds,{headers:header});
  }

  addProduct(item:Product) {
    let header=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,item,{headers: header});
  }

  editProduct(id, item:Product) {
    let header=new HttpHeaders().set('Content-Type','application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, {headers: header});
  }

}

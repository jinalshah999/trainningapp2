import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductserviceService } from "./productservice.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  flag: boolean=true;
  constructor(private _productData: ProductserviceService) {}

  ngOnInit() {

    this._productData.getAllProducts().subscribe(
      (data: Product[]) => {
        this.productList = data;
        this.flag = false;
      },
      function(err) {},
      function() {

        console.log("from complete");
      }
    );
  }
}

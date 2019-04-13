import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Category } from '../category';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
addProductForm:FormGroup;
categoryArray:Category[]=[];
  constructor(private _productData:ProductserviceService,private _router:Router) { }

  ngOnInit() {

    this._productData.getAllCategories().subscribe(
      (data:Category[])=>{
        this.categoryArray = data;
        this.setDefaultCategory(data[0].cat_id);
      }
    );

    this.addProductForm = new FormGroup({
      pro_name:new FormControl(null,Validators.required),
      pro_price:new FormControl(0,Validators.required),
      pro_soh:new FormControl(0,Validators.required),
      fk_cat_id:new FormControl(null,Validators.required)
    });
  }

  setDefaultCategory(cat_id) {
    this.addProductForm.patchValue({
      fk_cat_id: cat_id
    });
  }

  onSubmit(){
    console.log(this.addProductForm.value);
    this._productData.addProduct(this.addProductForm.value).subscribe(
      (data:any) => {
        if(data.affectedRows==1){
          this._router.navigate(['/product']);
        }
      }
    );
  }

}

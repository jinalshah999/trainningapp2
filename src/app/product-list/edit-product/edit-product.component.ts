import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category';
import { ProductserviceService } from '../productservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategoryJoin } from '../productCategory';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductForm:FormGroup;
  categoryArray:Category[]=[];
  pro_id:number;
  constructor(private _productData:ProductserviceService,private _router:Router,private _activatedRoute:ActivatedRoute) {
    this._productData.getAllCategories().subscribe(
      (data:Category[])=>{
        this.categoryArray=data;
      }
    );
   }

  ngOnInit() {
    this.pro_id=this._activatedRoute.snapshot.params['id'];
    this._productData.getProductById(this.pro_id).subscribe(
      (data:ProductCategoryJoin[])=>this.getAllDetails(data[0])
    );
    console.log('id'+this.pro_id);
    this.editProductForm = new FormGroup({
      pro_name:new FormControl(null,Validators.required),
      pro_price:new FormControl(0,Validators.required),
      pro_soh:new FormControl(0,Validators.required),
      fk_cat_id:new FormControl(null,Validators.required)
    });
  }

getAllDetails(data:ProductCategoryJoin){
  this.editProductForm.patchValue({
    pro_name:data.pro_name,
    pro_price:data.pro_price,
    pro_soh:data.pro_soh,
    fk_cat_id:data.fk_cat_id
  })
}
  onSubmit(){
    this._productData.editProduct(this.pro_id,this.editProductForm.value).subscribe(
      (data:any)=>{
        if(data.affectedRows==1){
          this._router.navigate(['/product']);
        }
      }
    );
  }

}

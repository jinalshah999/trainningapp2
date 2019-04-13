import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductserviceService } from "./productservice.service";
import { ProductCategoryJoin } from "./productCategory";
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from "@angular/cdk/collections";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

   displayedColumns: string[] = ['pro_id', 'pro_name','pro_price','cat_name','Action'];
   dataSource = new MatTableDataSource<ProductCategoryJoin>();
   selection = new SelectionModel<ProductCategoryJoin>(true);

   @ViewChild('paginator1') paginator:MatPaginator;
   @ViewChild(MatSort)sort:MatSort;

  arrIds:any[]=[];
   //productList: ProductCategoryJoin[] = [];
  //displayedColumns:string[]=['pro_name,pro_price'];
  //dataSource=new MatTableDataSource();

  constructor(private _productData: ProductserviceService,private _router:Router) {
    this._productData.getAllProducts().subscribe(
      (data: ProductCategoryJoin[]) => {
        console.log(data);
        this.dataSource.data=data;
        console.log('datasource'+this.dataSource.data[0].pro_name);
      },
      function(err) {},
      function() {
        console.log("from complete");
      }
    );
  }

  ngOnInit() {

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  applyFilter(str:string){
    this.dataSource.filter=str.trim().toLowerCase();
  }

    /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    //const numRows = this.dataSource.data.length;

    const numRows = this.dataSource.paginator.pageSize;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // this.isAllSelected() ?
    //     this.selection.clear() :
    //    this.dataSource.data.forEach(row => this.selection.select(row));
    if(this.isAllSelected()){
      this.selection.clear();
    }
    else{
      for(let i=0;i<this.paginator.pageSize;i++){
        this.selection.select(this.dataSource.data[i]);
      }
    }
  }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: ProductCategoryJoin){
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.pro_id}`;
  // }

  onDeleteAll(){
    console.log(this.paginator.pageSize);
    if(this.selection.selected.length==0){
      alert('Please select at least one record to delete');
    }
    else{
      console.log(this.selection.selected);
    }

  }
  deleteProduct(id:number){
    // this._productData.deleteProducts(id).subscribe(
    //   (data: any) => {
    //     console.log('success');
    //   }
    // );
  }

  editProduct(id:number) {
    this._router.navigate(['/editProduct',id]);
  }
}

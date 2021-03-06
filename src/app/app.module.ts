import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HomeComponent } from "./home/home.component";
import { ShellComponent } from "./shell/shell.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

import { routingArr } from "./app.routing";
import { MenuComponent } from "./menu/menu.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { interceptorclass } from "./interceptorclass";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,MatSortModule,MatCheckboxModule,MatSelectModule, MatButtonModule, MatRadioModule, MatCardModule, MatIconModule } from '@angular/material';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    HomeComponent,
    ShellComponent,
    PagenotfoundComponent,
    MenuComponent,
    AddProductComponent,
    DemoComponent,
    EditProductComponent
  ],
  imports: [BrowserModule, HttpClientModule, routingArr, BrowserAnimationsModule,
    MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule,
  MatCardModule,
  ReactiveFormsModule,
  MatIconModule
],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:interceptorclass,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}

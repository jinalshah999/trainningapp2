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
import { MatTableModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,MatSortModule,MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    HomeComponent,
    ShellComponent,
    PagenotfoundComponent,
    MenuComponent
  ],
  imports: [BrowserModule, HttpClientModule, routingArr, BrowserAnimationsModule,
    MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule
],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:interceptorclass,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}

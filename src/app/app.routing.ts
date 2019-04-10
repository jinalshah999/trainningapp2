import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ShellComponent } from "./shell/shell.component";
import { ProductListComponent } from "./product-list/product-list.component";
const arr: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "product", component: ProductListComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "**", component: PagenotfoundComponent }
];

export const routingArr = RouterModule.forRoot(arr);

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class interceptorclass implements HttpInterceptor{
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
      const httpRequest=req.clone(
        {
          headers:req.headers.set('Content-Type','application/json')
        }
      );
      console.log(httpRequest);
    return next.handle(httpRequest);
  }
}

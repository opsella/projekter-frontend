import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ActiveTenantInterceptor implements HttpInterceptor {
  // TODO: The tenant should be provided by the tenant service so that the user can change it on the fly
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.headers.set("x-tenant", "2fd721b8-34d5-480b-8177-71df1acada9f");
    return next.handle(request);
  }
}

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowLocationHeaderInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.method !== "POST" && req.method !== "PUT" && req.method !== "PATCH" && req.method !== "DELETE")
      return next.handle(req);

    return next.handle(req)
      .pipe(
        switchMap((event) => {
          // Only respond to HttpResponse events
          if (
            event instanceof HttpResponse && event.status === 201 ||
            event instanceof HttpResponse && event.status === 202
          ) {
            const location = event.headers.get("Location");
            if (location) {
              // Make a follow-up GET request to the Location header
              return this.http.get(location, { observe: "response" });
            }
          }
          // Just return the original event if not 201
          return of(event);
        })
      )
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class RequestService {
  private readonly urlBase: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlBase = environment.projekterApi;
  }

  public post<TResponseData>(path: string, body: object, params?: Record<string, string[]>): Observable<TResponseData> {
    return this.http.post<TResponseData>(this.getUrl(path), body, {
      params  : params,
      headers : {
        authorization: "" // make sure to add the bearer tokens
      }
    });
  }

  public get<TResponseData>(path: string, params?: Record<string, string>): Observable<TResponseData>
  public get<TResponseData>(path: string, params?: Record<string, string[]>): Observable<TResponseData>
  public get<TResponseData>(path: string, params?: Record<string, (string | string[])>): Observable<TResponseData>
  {
    return this.http.get<TResponseData>(this.getUrl(path), {
      params  : params,
      headers : {
        authorization: "" // make sure to add the bearer tokens
      }
    });
  }

  private getUrl(path: string): string {
    return `${this.urlBase}${path}`;
  }
}

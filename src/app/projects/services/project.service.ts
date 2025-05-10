import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects<T>(): Observable<T> {
    return this.http.get<T>(`https://localhost:7209/project`);
  }
}

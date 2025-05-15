import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Project } from '../../models/project';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  public getProjects<T>(): Observable<T> {
    return this.http
      .get<T>(`https://localhost:7209/project`)
      .pipe(tap((data) => console.log('DATA YOLO ', data)));
  }

  public getProjectById<T>(id: number): Observable<T> {
    return this.http
      .get<T>(`https://localhost:7209/project/${id}`)
      .pipe(tap((data) => console.log('DATA YOLO ', data)));
  }

  public createProject<T>(body: Project): Observable<T> {
    return this.http
      .post<T>(`https://localhost:7209/project`, body)
      .pipe(tap((data) => console.log('DATA YOLO ', data)));
  }
}

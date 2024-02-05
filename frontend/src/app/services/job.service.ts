import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../shared/models/job.model';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs$ = new BehaviorSubject<Job[]>([]);
  job: any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(baseUrl);
  }

  get(id: any): Observable<Job> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    data = this.job
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
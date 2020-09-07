import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient,HttpParams } from "@angular/common/http";
import {throwError, Observable} from "rxjs";

import {map, catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.api_url;
  }

  private formatErrors(error: any){
    return throwError(error);
  }

  get(path: any, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.baseUrl}${path}`, {params})
    .pipe(
      map((res: Response) => {
        return res;
      }),
      catchError(this.formatErrors.bind(this))
    );
  }

  post(path: string,body: any): Observable <any> {
    return this.http
      .post(`${this.baseUrl}${path}`, body)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError(this.formatErrors.bind(this))
      );
  }

  put(path: string,body: any):Observable<any> {
    return this.http  
        .put(`${this.baseUrl}${path}`, (body))
        .pipe(
          map((res: Response) => {
            return res;
          }),
          catchError(this.formatErrors.bind(this))
        );
  }


}

import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IRowData} from "../../shared/models/row-data";
import {Observable} from "rxjs";

type EntityArrayResponseTypeVO = HttpResponse<IRowData[]>;

@Injectable({providedIn: 'root'})
export class DataSetService {

  constructor(protected http: HttpClient) { }

  getRowsData(): Observable<EntityArrayResponseTypeVO>{
    return this.http
      .get<IRowData[]>(`http://localhost:8080/api/data`,{observe: 'response'});
  }
  getPredictions(rowsData : IRowData[]): Observable<IRowData[]>{
    return this.http
      .post<IRowData[]>(`http://localhost:8080/api/predict`,rowsData);
  }
}

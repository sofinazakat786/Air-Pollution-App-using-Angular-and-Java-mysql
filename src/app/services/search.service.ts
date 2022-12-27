//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  cities: any;
  constructor(private _http: HttpClient) { }
  apiUrl = "http://localhost:8088/api/v1/cities/search?query="

  //Get all data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }
}

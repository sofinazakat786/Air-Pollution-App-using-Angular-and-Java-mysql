import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AirpollutionData } from '../models/airpollution.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAirPollutionData(cityName: string): Observable<AirpollutionData> {
    return this.http.get<AirpollutionData>(environment.airpollutionApiBaseUrl+"?city="+cityName, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),params: new HttpParams()
        .set('city', cityName)
    })
  }
}

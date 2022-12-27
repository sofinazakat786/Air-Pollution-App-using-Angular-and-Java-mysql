import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http'
import { Favourite } from '../classes/Favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private createUrl= "http://localhost:8099/api/v1/addfav";
  private getUrl ="http://localhost:8099/api/v1/getfav";
  private deleteUrl="http://localhost:8099/api/v1/deletefav";
  constructor(private http : HttpClient) { }

 
  createFavorite(favourite:Favourite):Observable<object>{

    return this.http.post(`${this.createUrl}`,favourite);
    
  }
  getFavorites():Observable<object>{

    return this.http.get(`${this.getUrl}/${sessionStorage.getItem('username')}`);
  }
  deleteFavorites(id:number):Observable<object>{
    return this.http.delete(`${this.deleteUrl}/${id}`);
    
  }
  

  
}

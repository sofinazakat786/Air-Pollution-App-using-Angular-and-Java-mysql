import { Component, OnInit } from '@angular/core';
import { AirpollutionData } from 'src/app/models/airpollution.model';
import { ApiService } from 'src/app/services/api.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favourites : any;
  constructor(private favouriteService : FavouriteService) { }
  ngOnInit(): void {
    this.favouriteService.getFavorites().subscribe(response=>{
      console.log(response)
      this.favourites= response;
    })
  }
  deleteFavourites(id:number){
    this.favouriteService.deleteFavorites(id).subscribe(data=>{
      console.log(data);
      this.favourites();
      
    })
    
  }
  refresh(): void {
    window.location.reload();
}


  

}

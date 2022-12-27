import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favourite } from 'src/app/classes/Favourite';
import { AirpollutionData } from 'src/app/models/airpollution.model';
import { ApiService } from 'src/app/services/api.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-airwatcher',
  templateUrl: './airwatcher.component.html',
  styleUrls: ['./airwatcher.component.css']
})

export class AirwatcherComponent implements OnInit {

  constructor(private apiService: ApiService, private favouriteService: FavouriteService, private router: Router) {

  }

  cityName: string = 'Bangalore';
  city: string = 'Bangalore';
  favourite: any;
  airPullutionData: AirpollutionData | undefined;

  ngOnInit(): void {
    this.getAirPollutionData(this.cityName);
    this.cityName = '';
    console.log('city', this.cityName);
  }

  onSubmit() {
    this.getAirPollutionData(this.cityName);
    this.city = this.cityName;
  }

  private getAirPollutionData(cityName: string) {
    this.apiService.getAirPollutionData(cityName)
      .subscribe({
        next: (response) => {
          this.airPullutionData = response;
          console.log(response);
        }
      });
  }
  saveToFavourite(res: any) {
    console.log(res)
    this.favourite = new Favourite(sessionStorage.getItem("username"), this.cityName, res.overall_aqi, res.CO.concentration, res.PM10.concentration)
    console.log(this.favourite);
    alert("Added to favourites");
    this.favouriteService.createFavorite(this.favourite).subscribe(data => {
      console.log(data);

    },
      error => console.log(error)

    );
  }
}

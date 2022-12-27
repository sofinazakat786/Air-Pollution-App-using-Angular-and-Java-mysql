export class Favourite{
    userName: string | null;
	cityName: string;
	aqi: number;
	co_conc: number;
	pm10_conc: number;

    constructor(userName : string | null, cityName:string,aqi: number,co_conc:number,pm10_conc:number) {
        this.userName = userName;
        this.cityName = cityName;
        this.aqi = aqi;
        this.co_conc = co_conc;
        this.pm10_conc = pm10_conc;
    }
}
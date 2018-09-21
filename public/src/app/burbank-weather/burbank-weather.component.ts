import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank-weather',
  templateUrl: './burbank-weather.component.html',
  styleUrls: ['./burbank-weather.component.css']
})
export class BurbankWeatherComponent implements OnInit {
  weatherInfo = {name:'', humidity: '', temp: '', temp_high: '', temp_min: '', status: ''}

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getTheWeatherBurbank();
  }
  getTheWeatherBurbank(){
    let observable = this._httpService.getWeatherFromApi('Burbank');
    observable.subscribe((data: any) => {
      console.log("Got Seattle weather", data)
      this.weatherInfo.name = data.name;
      this.weatherInfo.humidity = data.main.humidity;
      this.weatherInfo.temp = data.main.temp;
      this.weatherInfo.temp_high = data.main.temp_max;
      this.weatherInfo.temp_min = data.main.temp_min;
      this.weatherInfo.status = data.weather[0].description;
    });
  }

}

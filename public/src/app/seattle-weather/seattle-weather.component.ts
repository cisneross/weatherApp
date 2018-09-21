import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle-weather',
  templateUrl: './seattle-weather.component.html',
  styleUrls: ['./seattle-weather.component.css']
})
export class SeattleWeatherComponent implements OnInit {
  weatherInfo = {name:'', humidity: '', temp: '', temp_high: '', temp_min: '', status: ''}

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getTheWeatherSeattle();
  }
  getTheWeatherSeattle(){
    let observable = this._httpService.getWeatherFromApi('Seattle');
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

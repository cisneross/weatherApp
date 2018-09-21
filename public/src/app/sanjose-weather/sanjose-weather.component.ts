import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-sanjose-weather',
  templateUrl: './sanjose-weather.component.html',
  styleUrls: ['./sanjose-weather.component.css']
})
export class SanjoseWeatherComponent implements OnInit {
  weatherInfo = {name:'', humidity: '', temp: '', temp_high: '', temp_min: '', status: ''}

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getTheWeatherSanJose();
  }
  getTheWeatherSanJose(){
    let observable = this._httpService.getWeatherFromApi('San Jose');
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

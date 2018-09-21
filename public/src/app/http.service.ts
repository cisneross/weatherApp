import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
  getWeatherFromApi(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e8370c4bbbb5569b888d546aa308196a`);
  }

  //api.openweathermap.org/data/2.5/weather?q={city name}


}

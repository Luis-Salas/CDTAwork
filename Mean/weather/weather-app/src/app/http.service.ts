import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}
  getWeather(city){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=442b4a8ffff0d3544a158cd98ab73ec8")
  }
}

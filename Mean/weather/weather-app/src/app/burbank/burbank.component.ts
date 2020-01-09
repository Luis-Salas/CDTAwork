import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any ;
  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.grabWeather()
  }
  grabWeather(){
    var city = "burbank"
    let observable = this._httpService.getWeather(city)
    observable.subscribe(data =>{
      this.weather = data;
      console.log(this.weather)
      var k = this.weather.main.temp
      k = (k - 273.15) * 9/5 + 32 
      console.log(k)      
      this.weather.main.temp = k
    })
  }
}

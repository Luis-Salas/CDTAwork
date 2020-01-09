import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cake:any;
  title = 'app';
  allCakes: any;
  rating = {};
  oneCake = {}
  constructor(private _httpService: HttpService){ 
  }
  ngOnInit(){
    this.cake = {
      baker: "",
      imageUrl: ""
    }
    this.rating = {
      rating: "",
      comment: ""
    }
    this.getCakes()
  }
  getCakes(){
    let observable = this._httpService.RetrieveCakes();
        observable.subscribe(data => {
          console.log("got our info", data)  
          this.allCakes = data;  
      })
  }
  createCake(){
    let observable = this._httpService.MakeCake(this.cake);
        observable.subscribe(data => {
          console.log("got our info", data)  
          this.getCakes()
      })
  }
  createRating(id){
    let observable = this._httpService.makeRating(id , this.rating);
    observable.subscribe(data => {
      console.log("got our info", data)  
      this.getCakes()
  })
  }
  showCake(id){
    console.log(id)
    let observable = this._httpService.retrieveCake(id);
    observable.subscribe(data => {
      console.log("got our info", data)  
      this.oneCake = data
  })
  }
}
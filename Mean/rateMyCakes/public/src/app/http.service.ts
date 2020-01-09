import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){

  }
  RetrieveCakes(){
    return this._http.get('/cakes');
  }
  MakeCake(cake){
    return this._http.post('/create', cake);
  }
  makeRating(id, rating){
    return this._http.post("/comment/"+ id, rating)
  }
  retrieveCake(id){
    return this._http.get("/show/"+ id)
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}
  ServiceCreateAuthor(author){
    console.log(author.name)
    return this._http.post('/create', author)
  }
  ServiceGetAuthor(){
    return this._http.get('/authors')
  }
  ServiceEditAuthor(id ,author){
    return this._http.post("/author/" +id, author)
  }
}

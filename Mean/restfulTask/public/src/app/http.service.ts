import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http:HttpClient){

  }
  getTasks(){
    // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Return the observable to wherever the getTasks method was invoked.
    return this._http.get('/tasks');
  }
  getOne(id){
    return this._http.get('show/' + id)
  }
  createTask(task){
    return this._http.post('/create', task)
  }
  delete(id){
    return this._http.get('/delete/'+ id)
  }
  UpdateTask(id, task){
    return this._http.post('/update/'+ id, task)
  }
}

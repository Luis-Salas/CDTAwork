import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app';
    updateInfo = {};
    tasks:any = [];
    oneTask = {};
    newTask:any;
  constructor(private _httpService: HttpService){
  
  }
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.newTask = {
        title: "",
        description: ""
      }
    }
    getTasksFromService(){
      let observable = this._httpService.getTasks();
        observable.subscribe(data => {
          console.log("got our info", data)
          this.tasks = data;
         
        })
    }
    getOneTask(id){
      console.log(id)
      let observable = this._httpService.getOne(id);
      observable.subscribe(data => {
        console.log("got our info", data)
        this.oneTask = data;
      })
    }
    createtask(){
      let observable = this._httpService.createTask(this.newTask);
      observable.subscribe(data => {
        console.log("created a thing", data)
        // this.newTask = {title: "",description:""}
      })
    }
    deleteTask(id){
      let observable = this._httpService.delete(id);
      observable.subscribe(data => {
        console.log("created a thing", data)
        // this.newTask = {title: "",description:""}
      })
      this.getTasksFromService()
    }
    getUpdateInfo(id){
      let observable = this._httpService.getOne(id);
      observable.subscribe(data => {
        console.log("got our info", data)
        this.updateInfo = data;
      })
    }
    Update(id){
      console.log(id)
      let observable = this._httpService.UpdateTask(id, this.updateInfo);
      observable.subscribe(data => {
        console.log("got our info", data)
      })
    }

}

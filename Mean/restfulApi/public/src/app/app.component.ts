import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    title = "Restful Tasks API"
    tasks = [];
    task = ""



   constructor(private _httpService: HttpService){

   }
   ngOnInit(){

   }
   getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
         console.log("Got our tasks!", data)
         // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
         // This may be different for you, depending on how you set up your Task API.
         this.tasks = data
         console.log(this.tasks, "dataaa")
      });
   }
   showFromService(id){
     let observable = this._httpService.show(id);
         observable.subscribe(data =>
           {console.log("Got our tasks!", data)
           this.task = data
         });
     console.log(id)
   }
 }

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  allAuthors : any;
  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  
    this.getAuthors()
  }
  getAuthors(){
    let observable =  this._httpService.ServiceGetAuthor();
    observable.subscribe(data => {
      this.allAuthors = data
      console.log(this.allAuthors)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  author:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    
    ){}

  ngOnInit() {
    this.author = {
      name: ""
    };
  }
  createAuthor(){
    console.log(this.author.name)
    let observable =  this._httpService.ServiceCreateAuthor(this.author);
    observable.subscribe(data => {
       console.log("Got data!", data)
       this._router.navigate(['/'])
    });
  }
}

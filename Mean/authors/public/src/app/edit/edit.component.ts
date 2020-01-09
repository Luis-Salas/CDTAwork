import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.author = {
      name : ""
    }
  }
  editAuthor(){
    this._route.params.subscribe((params: Params) => {
      var id = params.id
      let observable = this._httpService.ServiceEditAuthor(id, this.author)
      observable.subscribe(data => {
        console.log(data)
      })
   });
  }
}


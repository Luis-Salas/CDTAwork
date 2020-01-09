import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router  
    ) { }

  ngOnInit() {
    console.log("Hello")
    this._route.params.subscribe(params => console.log(`The parent params: ${params.id}`))
    }
  }



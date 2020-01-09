import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _httpService: HttpService){}
  newProduct = {}
  ngOnInit() {
    this.newProduct = {
      title : "",

    }
  }
  createProduct(){
    console.log("hello")
    console.log(this.newProduct)
    let obs = this.Htt
  }
}

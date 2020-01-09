import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() getOneTask: any;  // use the @Input decorator to indicate this comes from the parent
  constructor() { }

  ngOnInit() {
  }

}

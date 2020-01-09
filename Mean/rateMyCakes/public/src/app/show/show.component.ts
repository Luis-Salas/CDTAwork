import { Component, OnInit, Input } from '@angular/core'; // add Input to our imports

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() showCake: any;  // use the @Input decorator to indicate this comes from the parent
  constructor() { }

  ngOnInit() {
  }

}


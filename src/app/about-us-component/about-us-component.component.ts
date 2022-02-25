import { Component, OnInit } from '@angular/core';
import { RoutingFunctionsService } from '../services/routing-functions/routing-functions.service';

@Component({
  selector: 'app-about-us-component',
  templateUrl: './about-us-component.component.html',
  styleUrls: ['./about-us-component.component.css']
})
export class AboutUsComponentComponent implements OnInit {

  constructor(
    private routingFunctions:RoutingFunctionsService
  ) { }

  ngOnInit(): void {
  }

  home(){
    this.routingFunctions.home();
  }
}

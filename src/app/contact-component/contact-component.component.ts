import { Component, OnInit } from '@angular/core';
import { RoutingFunctionsService } from '../services/routing-functions/routing-functions.service';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  constructor(
    private routingFunctions:RoutingFunctionsService
  ){}

  ngOnInit(): void {
  }

  home(){
    this.routingFunctions.home();
  }

}

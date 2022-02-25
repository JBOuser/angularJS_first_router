import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingFunctionsService } from '../services/routing-functions/routing-functions.service';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {

  public titleOne:string="URL not found";

  constructor(
    private router:Router,
    private routingFunctions:RoutingFunctionsService,
  ) { }

  ngOnInit(): void {
    this.titleOne = "'"+this.router.url+"' not found";
  }

  home(){
    this.routingFunctions.home();
  }
}

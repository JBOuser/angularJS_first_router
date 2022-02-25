import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingFunctionsService {

  constructor(
    private router:Router,
    private activateRoute:ActivatedRoute
  ) { }

  home(){
    this.router.navigate(['home']);
  }
  projects(){
    this.router.navigate(['projects']);
  }
  aboutUs(){
    this.router.navigate(['about-us']);
  }
  contact(){
    this.router.navigate(['contact']);
  }
}

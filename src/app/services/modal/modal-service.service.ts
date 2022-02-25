import { Injectable } from '@angular/core';
import { EmployeeClass } from '../../models/employee-class';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  showConfirmation(title:string, content:string ){
    //alert(`${title}\n${content}`)
    return confirm(`${title}\n${content}`)
  }
}
import { Injectable } from '@angular/core';
import { EmployeeClass } from 'src/app/models/employee-class';
import { ModalServiceService } from '../modal/modal-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataServiceService {

  private employees:EmployeeClass[]=[];
  constructor(private modalService:ModalServiceService) {
    this.employees = [
      new EmployeeClass("1","Kasumi","","Warrior",2700.0),
      new EmployeeClass("2","Ryu","Hayabusa","Leader",3000.0),
      new EmployeeClass("3","Hayate","","Leader",2700.0),
      new EmployeeClass("4","Ayane","","Warrior",2400.0)
    ]
  }

  getAllEmployess(){
    return this.employees;
  }

  addNewEmployee(employeeObject:EmployeeClass){
    if(this.modalService.showConfirmation(
      `ADDITION ACTION`,
      `Add the new employee "${employeeObject.getName()}"?`
    ) === true){
      //this.employees.push(newEmployee);
      this.employees.push(employeeObject);
    }
  }

  deleteAnEmployee(employeeObject:EmployeeClass){
    if(this.modalService.showConfirmation(
      `DELETE ACTION`,
      `Delete the employee "${employeeObject.getName()}"?`
    ) === true){
      var indexObject = this.employees.indexOf(employeeObject);
      var deletedEmployee = this.employees.splice(indexObject,1);    
    }
  }
}

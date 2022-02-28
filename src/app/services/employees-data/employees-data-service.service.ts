import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeClass } from 'src/app/models/employee-class';
import { ModalServiceService } from '../modal/modal-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataServiceService {

  private dataUrl = "https://run.mocky.io/v3/08203eb9-482a-4304-a16b-c4ac4cd8f550";
  private employees:EmployeeClass[]=[];

  constructor(
    private modalService:ModalServiceService,
    private http:HttpClient //run fetch data
  ) {
    //#1.0 Local
    /*
    this.employees = [
      new EmployeeClass("1","Kasumi","","Warrior",2700.0),
      new EmployeeClass("2","Ryu","Hayabusa","Leader",3000.0),
      new EmployeeClass("3","Hayate","","Leader",2700.0),
      new EmployeeClass("4","Ayane","","Warrior",2400.0)
    ]
    */

    //#2.0
    this.getAllEmployeesFromURL();
  }

  getAllEmployees(){
    return this.employees;
  }

  getAllEmployeesFromURL(){
    this.employees=[];
    this.http.get(this.dataUrl)
    .subscribe(res => {
        Object.values(res).forEach(obj => {
          var newEmployee = new EmployeeClass(
            obj.id,
            obj.name !== 'undefined' ? obj.name : "Name",
            obj.surname !== 'undefined' ? obj.surname : "Alias",
            obj.occupation !== 'undefined' ? obj.occupation[0] : "Occupation",
            obj.yearFirstAppearance !== 'undefined' ? obj.yearFirstAppearance : 1986
          )
          newEmployee.setIcon(obj.iconURL !== 'undefined' ? obj.iconURL : "");
          newEmployee.setImg(obj.imgURL !== 'undefined' ? obj.imgURL : "");
          newEmployee.setData(obj.dataURL !== 'undefined' ? obj.dataURL : "");

          this.employees.push(newEmployee);
        })
    })
  }

  getEmployeeById(id:string){
    let employeeMatch=null;
    this.employees.findIndex(employee => {
      if(id === employee.getId()){
        employeeMatch = employee;
        return;
      }
    })
    return employeeMatch;
  }

  updateEmployeeById(employeeObject:EmployeeClass){
    let employeeMatch = this.getEmployeeById(employeeObject.getId());
    let indexMatch = this.employees.indexOf(employeeMatch);
    this.employees[indexMatch] = employeeObject;
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
      return true;
    }
    else{
      return false;
    }
  }
}

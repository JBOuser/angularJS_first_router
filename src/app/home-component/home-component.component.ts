import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeClass } from '../models/employee-class';
import { EmployeesDataServiceService } from '../services/employees-data/employees-data-service.service';
import { ModalServiceService } from '../services/modal/modal-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  subTitleOne = 'Add an Employees';
  subTitleTwo = 'Employees List';
  
  private availableUsers = ['admin'];
  public tmpId:string="";
  public tmpName:string="";
  public tmpSurname:string="";
  public tmpPosition:string="";
  public tmpSalary:number=0;

  //update employees list
  @Input() employees:EmployeeClass[]=[];
  @Output() employeesChange = new EventEmitter<EmployeeClass>();
  
  //ModalServiceService is injected
  constructor(
    private modalService:ModalServiceService,
    private employeesDataService:EmployeesDataServiceService
  ){}

  ngOnInit(): void {
    //get all employees from service
    this.employees = this.employeesDataService.getAllEmployess();
  }

  //Add an Employee
  onSubmit(data:any){

    let newEmployee = new EmployeeClass(
      `${this.employees.length}`,
      data.name,
      data.surname,
      data.position,
      data.salary
    )

    //#2.0
    //modalService is injected inside employeesDataService
    this.employeesDataService.addNewEmployee(newEmployee);
  }
  
  //Clean inputs data
  cleanAllInputs(){    
    this.tmpId="";
    this.tmpName="";
    this.tmpSurname="";
    this.tmpPosition="";
    this.tmpSalary=0;
  }

  //Delete an Employee
  onDelete(employeeObject:EmployeeClass){
    //#2.0
    //modalService is injected inside employeesDataService
    this.employeesDataService.deleteAnEmployee(employeeObject);
  }

}

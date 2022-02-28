import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeClass } from '../models/employee-class';
import { EmployeesDataServiceService } from '../services/employees-data/employees-data-service.service';
import { RoutingFunctionsService } from '../services/routing-functions/routing-functions.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {

  titleOne = 'Add a new Employee';
  //updateTitleOne = 'Update Employee data';

  public tmpId:string="";
  public tmpName:string="";
  public tmpSurname:string="";
  public tmpPosition:string="";
  public tmpYear:number=0;
  public tmpImg:string="";

  public employeeParamId:string="";
  private employeeMatch:EmployeeClass;
  private isUpdate:boolean=false;

  //update employees list
  @Input() employees:EmployeeClass[]=[];
  @Output() employeesChange = new EventEmitter<EmployeeClass>();

  constructor(
    private routingFunctions:RoutingFunctionsService,
    private employeesDataService:EmployeesDataServiceService,
    private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    if( this.activateRoute.snapshot.paramMap.get('id')!==null &&
        this.activateRoute.snapshot.paramMap.get('id')!==undefined
      ){
      this.isUpdate = true;

      //get queryParam from URL (?Update%20Employee)
      this.titleOne = this.activateRoute.snapshot.queryParams['title'];
      
      //#1.0 (project/:id)
      //this.employeeParamId = this.activateRoute.snapshot.paramMap.get('id');
      //#2.0 (project/:id)
      this.employeeParamId = this.activateRoute.snapshot.params['id'];
      
      this.employeeMatch = this.employeesDataService.getEmployeeById(this.employeeParamId);
      this.loadEmployeeData(this.employeeMatch);
    }    
  }

  getIsUpdate(){ return this.isUpdate; }

  //Add an Employee
  onSubmit(data:any){

    let newEmployee = new EmployeeClass(
      !this.isUpdate ? `${this.employees.length}` : data.id,
      data.name,
      data.surname,
      data.position,
      data.year
    )

    if(!this.isUpdate){      
      //modalService is injected inside employeesDataService
      this.employeesDataService.addNewEmployee(newEmployee);
    }
    else
    {
      //modalService is injected inside employeesDataService
      this.employeesDataService.updateEmployeeById(newEmployee);
    }

    //redirect to '/home'
    this.home()
  }
  
  //Clean inputs data
  cleanAllInputs(){    
    //this.tmpId="";
    this.tmpName="";
    this.tmpSurname="";
    this.tmpPosition="";
    this.tmpYear=0;
  }

  loadEmployeeData(employeeObject:EmployeeClass){
    //console.log(employeeObject);
    this.tmpId = employeeObject.getId();
    this.tmpName = employeeObject.getName();
    this.tmpSurname = employeeObject.getSurname();
    this.tmpPosition = employeeObject.getPosition();
    this.tmpYear = employeeObject.getYear();
    this.tmpImg = employeeObject.getImg();
  }

  deleteEmployee(){
    let employeeToDelete = this.employeesDataService.getEmployeeById(this.tmpId);
    if(this.employeesDataService.deleteAnEmployee(employeeToDelete)){
      //redirect to '/home'
      this.home()
    }
  }

  home(){
    this.routingFunctions.home();
  }

}

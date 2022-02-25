export class EmployeeClass {
    private id:string="";
    private name:string="";
    private surname:string="";
    private position:string="";
    private salary:number=0.0;

    //#1.0
    public constructor(
        id:string,
        name:string,
        surname:string,
        position:string,
        salary:number,
    ){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.position = position,
        this.salary = salary
    };


    public getId() : string {
        return this.id;
    }
    public getName() : string {
        return this.name;
    }
    public getSurname() : string {
        return this.surname;
    }
    public getPosition() : string {
        return this.position;
    }
    public getSalary() : number {
        return this.salary;
    }
}

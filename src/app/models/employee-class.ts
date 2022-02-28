export class EmployeeClass {
    private id:string="";
    private name:string="";
    private surname:string="";
    private position:string="";
    private year:number=0.0;
    private icon:string="";
    private img:string="";
    private data:string="";

    //#1.0
    public constructor(
        id:string,
        name:string,
        surname:string,
        position:string,
        year:number,
    ){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.position = position,
        this.year = year
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
    public getYear() : number {
        return this.year;
    }


    public getIcon(){
        return this.icon;
    }
    public setIcon(icon:string){
        this.icon = icon;
    }

    public getImg(){
        return this.img;
    }
    public setImg(img:string){
        this.img = img;
    }

    public getData(){
        return this.data;
    }
    public setData(data:string){
        this.data = data;
    }
}

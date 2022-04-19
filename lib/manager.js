class Manager extends Employee {
    constructor(name, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }

}
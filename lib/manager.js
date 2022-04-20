const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }

}


module.exports = Manager;
  
const Employee = require('./employee');


class Intern extends Employee {
    constructor(name, school) {
        super(name, school);
        this.school = school;
    }
    
    getSchool(){

    }

    getRole(){
        return "Intern"
    }
}
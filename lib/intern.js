const Employee = require('./employee');


class Intern extends Employee {
    constructor(name, school) {
        super(name, school);
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}
module.exports = Intern;
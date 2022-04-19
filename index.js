const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName(){

    }

    getId(){

    }

    getEmail(){

    }

    getRole(){
        return "Employee"
    }
}

class Manager extends Employee {
    constructor(name, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }

}

class Engineer extends Employee {
    constructor(name, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){

    }

    getRole(){
        return "Engineer"
    }
}

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


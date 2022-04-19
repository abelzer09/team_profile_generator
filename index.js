const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


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


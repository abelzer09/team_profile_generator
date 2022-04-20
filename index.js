const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-temp.js');
const employees = [];
const questMan = [
    {
        type: "input",
        name: 'name',
        message: "Enter Manager's Name.",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter Employee ID Number.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email address.",
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter office number.",
    },
    // {
    //     type: "list",
    //     name: 'team',
    //     message: "Would you like to add any additional team members",
    //     choices: ['Engineer', 'Intern', 'Finish building team'],
    // },
]

const questEng = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Engineer's name.",
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID Number.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username.',
    },
]

const questInt = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Intern's Name.",
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID Number.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter name of school Intern attends.',
    },
]

const questList = [
    {
        type: "list",
        name: 'team',
        message: "Would you like to add any additional team members",
        choices: ['Engineer', 'Intern', 'Finish building team'],
    },
]


function init(){
    function createMan(){
        inquirer.prompt(questMan).then((answers)=>{
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
            employees.push(manager);
            nextEmp();
        })
    }
    function nextEmp(){
        inquirer.prompt(questList).then((answers)=>{
            switch (answers.team){
                case 'Engineer':
                    addEngineer()
                    break
                case 'Intern':
                    addIntern()
                    break
                case 'Finish building team':
                    build()
                    break
            }
        })
    }
    function addEngineer(){
        inquirer.prompt(questEng).then((answers)=>{
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(engineer);
            nextEmp();
        })
    }
    function addIntern(){
        inquirer.prompt(questInt).then((answers)=>{
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(intern);
            nextEmp();
        })
    }
    function build(){
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
          }
          fs.writeFileSync(distPath, render(employees), 'utf-8');
    }

    createMan();
}

init();


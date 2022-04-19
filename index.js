const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: "input",
        name: 'name',
        message: 'Enter Managers Name.',
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
    {
        type: "list",
        name: 'team',
        message: "Would you like to add any additional team members",
        choices: ['Engineer', 'Intern', 'Finish building team'],
    },
]


const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

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
    {
        type: "list",
        name: 'team',
        message: "Would you like to add any additional team members",
        choices: ['Engineer', 'Intern', 'Finish building team'],
    },
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


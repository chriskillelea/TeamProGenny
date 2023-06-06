const fs = require('fs');
const inquirer = require('inquirer');

/* Prompt - team manager info */
function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the team manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the team manager's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team manager's email address:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the team manager's office number:",
    },
  ]);
}


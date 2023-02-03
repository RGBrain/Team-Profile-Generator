const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const mngrQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is the manager's employee id?"
    },        
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?"
    },        
    {
      type: "input",
      name: "officeNumber",
      message: "What is the project name?"
    },
    {
      type: "list",
      name: "additionalStaff",
      message: "Would you now like to do next?  Choices: ",
      choices: ['Add an Engineer', 'Add an intern', "I've finished adding staff"]
    }
];

// function to initialize program
function init() {
    inquirer.prompt(mngrQuestions)
    .then(function(response){
    console.log(`Thank you for entering those details for ${response.name}`);
    });
}

// function call to initialize program
init();
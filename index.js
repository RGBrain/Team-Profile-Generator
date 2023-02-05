const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Gather information about the development team members, and render the HTML file.

const team = [];

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
      message: "What is the manager's office number?"
    },
    {
      type: "list",
      name: "additionalStaff",
      message: "Would you like to do next?  Choices: ",
      choices: ['Add an engineer', 'Add an intern', "I've finished adding staff"]
    }
];

const engQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is this engineer's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is this engineer's employee id?"
    },        
    {
      type: "input",
      name: "email",
      message: "What is this engineer's email address?"
    },        
    {
      type: "input",
      name: "github",
      message: "What is this engineer's GitHub username?"
    },
    {
      type: "list",
      name: "additionalStaff",
      message: "Engineer added - would you like to do next?  Choices: ",
      choices: ['Add an engineer', 'Add an intern', "I've finished adding staff"]
    }
];

const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is this intern's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is this intern's employee id?"
    },        
    {
      type: "input",
      name: "email",
      message: "What is this intern's email address?"
    },        
    {
      type: "input",
      name: "school",
      message: "Where did this intern's go to school?"
    },
    {
      type: "list",
      name: "additionalStaff",
      message: "Would you now like to do next?  Choices: ",
      choices: ['Add an intern', 'Add an engineer', "I've finished adding staff"]
    }
];

// function to initialize program
function init() {
    inquirer.prompt(mngrQuestions)
    .then(function(data){
    const mngr = new Manager(data.name, data.id, data.email, data.officeNumber)
    team.push(mngr)

    if (data.additionalStaff === 'Add an intern') {
        addIntern();
    }
    if (data.additionalStaff === 'Add an engineer') {
        addEngineer();
    }
    if (data.additionalStaff === "I've finished adding staff") {
        createPage();
    }

    });
}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data){
    const intern = new Intern(data.name, data.id, data.email, data.school)
    team.push(intern)
    if (data.additionalStaff === 'Add an intern') {
        addIntern();
    }
    if (data.additionalStaff === 'Add an engineer') {
        addEngineer();
    }
    if (data.additionalStaff === "I've finished adding staff") {
        createPage();
    }
})
}

function addEngineer() {
    inquirer.prompt(engQuestions)
    .then(function(data){
    const eng = new Engineer(data.name, data.id, data.email, data.github)
    team.push(eng)
    if (data.additionalStaff === 'Add an intern') {
        addIntern();
    }
    if (data.additionalStaff === 'Add an engineer') {
        console.log(`engineer called`);
        addEngineer();
    }
    if (data.additionalStaff === "I've finished adding staff") {
        console.log(`finish called`);
        createPage();
    }
})
}

//
function createPage() {
  teamData = render(team);
  fs.writeFile(outputPath, teamData, err => {
    if (err) {
      console.error(err);
    }
});
}

// function call to initialize program
init();

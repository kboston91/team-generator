const fs = require("fs");
var inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const path = require("path");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let teamArray = [];

// let bob = new Employee("Bob", 123, 'bob@bob.com');
// let steve = new Engineer('engineersteve', 'steve', 456, 'steve@steve.com');
// let cindy = new Manager('001', 'Cindy', 789, 'cindy@cindy.com');
// let betty = new Intern('UT Austin', 'Betty', 000, 'betty@betty.com');

// var w = betty.getRole();
// var x = bob.getRole();
// var y = steve.getRole();
// var z = cindy.getRole();

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

function newEmployee() {
  const memberRole = [
    {
      type: "list",
      name: "title",
      message: "Do you want to add more team members?",
      choices: ["Intern", "Engineer", "None"],
    },
  ];
  inquirer.prompt(memberRole).then((roleResponse) => {
    if (roleResponse.title === "Intern") {
      generateIntern();
    } else if (roleResponse.title === "Engineer") {
      generateEngineer();
    } else if (roleResponse.title === "None") {
      generateTeam();
    }
  });
}

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "office",
    message: "Please provide you office number.",
  },
];

function generateManager() {
  inquirer.prompt(managerQuestions).then((managerResponse) => {
    let manager = new Manager(
      managerResponse.name,
      managerResponse.id,
      managerResponse.email,
      managerResponse.office
    );
    teamArray.push(manager);
    newEmployee();
  });
}

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Engineer's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide the Engineer's github username.",
  },
];

function generateEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    let engineer = new Engineer(
      engineerResponse.name,
      engineerResponse.id,
      engineerResponse.email,
      engineerResponse.github
    );
    teamArray.push(engineer);
    newEmployee();
  });
}

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your intern's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "Where does this intern go to school?",
  },
];

function generateIntern() {
  inquirer.prompt(internQuestions).then((internResponse) => {
    let intern = new Intern(
      internResponse.name,
      internResponse.id,
      internResponse.email,
      internResponse.school
    );
    teamArray.push(intern);
    newEmployee();
  });
}

function writeToFile() {
  console.log(teamArray);
  let htmlPath = path.join(__dirname, "/dist", "index.html");
  return fs.writeFile(htmlPath, generateHTML(teamArray), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function generateTeam() {
  writeToFile();
}

function init() {
  generateManager();
}

init();

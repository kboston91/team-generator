const fs =require('fs');
var inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

const Employee= require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")


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

const questions = [
  {
    type: 'list',
    name: 'title',
    message: 'What is the title of your team member?',
    choices: ['Intern', 'Employee', 'Engineer', 'Manager']
  },
  {
    type: 'input',
    name: 'name',
    message: "What is your team member's name?"
  },
  {
    type: 'input',
    name: 'employee-id',
    message: "What is your team member's employee id?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your team member's email address?"
  },
  {
    type: 'input',
    name: 'school',
    message: 'Where does this intern go to school?'
  },
  {
    type: 'input',
    name: 'github',
    message: "Please provide the Engineer's github username."
  },
  {
    type: 'input',
    name: 'office',
    message: "Please provide the Manager's office number."
  }
]

inquirer
  .prompt(questions)
  .then((responses) => {
    var htmlText = ''
    fs.writeFile('index.html', generateHTML(responses), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  
  

  function init() {}

  init();


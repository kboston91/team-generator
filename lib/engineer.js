const Employee = require('./employee');

// Convert the constructor function, including the prototype methods, to ES6 Classes.
class Engineer extends Employee{
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;

  }



  getGithub(){
    return this.github;
  }
  
  getRole(){
    return 'Engineer'
  }
}
// links this to the index.js
module.exports = Engineer
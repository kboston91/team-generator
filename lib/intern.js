const Employee = require('./employee');

// Convert the constructor function, including the prototype methods, to ES6 Classes.
class Intern extends Employee{
  constructor(school, name, id, email) {
    super(name, id, email)
    this.school = school;

  }



  getSchool(){
    return this.school;
  }
  
  getRole(){
    return 'Intern'
  }
}
// links this to the index.js
module.exports = Intern
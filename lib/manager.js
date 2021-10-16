const Employee = require('./employee');

// Convert the constructor function, including the prototype methods, to ES6 Classes.
class Manager extends Employee{
  constructor(officeNumber, name, id, email) {
    super(name, id, email)
    this.officeNumber = officeNumber;

  }
  
  getRole(){
    return 'Manager'
  }
}
// links this to the index.js
module.exports = Manager
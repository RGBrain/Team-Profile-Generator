const Employee = require("./Employee");

class Manager extends Employee {
  
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    // Returns role (overrides the original declaration in the parent class (Employee) which returns 'Employee')
    getRole() {
        return "Manager";
    }
    // Returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }
  
  }

  module.exports = Manager;
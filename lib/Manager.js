const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

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
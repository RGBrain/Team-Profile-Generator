const Employee = require("./Employee");

class Intern extends Employee {
  
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }

    // Returns role (overrides the original declaration in the parent class (Employee) which returns 'Employee')
    getRole() {
        return "Intern";
    }
    // Returns office number
    getSchool() {
        return this.school;
    }
  
  }

  module.exports = Intern;
const Employee = require("./Employee");

class Engineer extends Employee {
  
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }

    // Returns role (overrides the original declaration in the parent class (Employee) which returns 'Employee')
    getRole() {
        return "Engineer";
    }
    // Returns office number
    getGithub() {
        return this.github;
    }
  
  }

  module.exports = Engineer;
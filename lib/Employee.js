// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Returns name
    getName() {
        return this.name;
    }
    // Returns ID
    getId() {
        return this.id;
    }
    // Returns Email
    getEmail() {
        return this.email;
    }
    // Returns Employee (as default)
    getRole() {
        return "Employee"
    }

}

module.exports = Employee;

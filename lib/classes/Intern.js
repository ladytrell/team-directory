const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, github, school) {
        super(name, id, email);
        this.github = github;
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getGithub() {
        return this.github;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
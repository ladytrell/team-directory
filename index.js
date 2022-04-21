//const Employee = require('./lib/classes/Employee');
const Manager = require('./lib/classes/Manager');
const Engineer = require('./lib/classes/Engineer');
const Intern = require('./lib/classes/intern');
const { employeeQuestions, managerQuestion, githubQuestion, isInternQuestion, schoolQuestion, moreEmployeesQuestion } = require('./lib/Questions');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');
const inquirer =  require('inquirer');

// To Do Build HTML

class teamBuilder {
    constructor (){
        this.manager = {};
        this.engineers = [];
        this.interns = [];
    }

    // Collect Engineer and Intern details
    async teamMemberDetails () {
        console.log('Enter Employee details\n');
        const isIntern = await inquirer.prompt(isInternQuestion);
        const answers = await inquirer.prompt(employeeQuestions);
        const github = await inquirer.prompt(githubQuestion);

        if(!isIntern.employeeType){
            const engineer = new Engineer(answers.name, answers.Id, answers.email, github.github);   
            //console.log(engineer)  
            this.engineers.push(engineer);
        } else {
            const school = await inquirer.prompt(schoolQuestion);
            const intern = new Intern(answers.name, answers.Id, answers.email, github.github, school.school);  
            //console.log(intern)       
            this.interns.push(intern);
        }
        
        const addEmployee = await inquirer.prompt(moreEmployeesQuestion);
        
        if (addEmployee.more) {
            return await this.teamMemberDetails ();
        } else {
            //console.log(this);
            return;
        }
        
    }

    // Collect Manager Details
    async managerDetails() {     
        console.log('Enter Your details\n');   
        const answers = await inquirer.prompt(employeeQuestions);
        const officeNum = await inquirer.prompt(managerQuestion);
        this.manager = new Manager(answers.name, answers.Id, answers.email, officeNum.officeNum);
        //console.log(this.manager.getManager());
    }

    async init(){
        console.log("Welcome to Team Builder\n");
        await this.managerDetails();
        await this.teamMemberDetails();
        return
    }
}

const team = new teamBuilder();

team.init()
.then(() => {
    return generatePage(team);
}) /*
// Call back to write the file with html created by generatePage
.then(data => {
    return writeToFile('./dist/index.html', data);
})
// Display file created if the write is successful
.then(writeToFileResponse => {
    console.log(writeToFileResponse);
})
// Catches and display error message
.catch(err => {
    console.log(err);
})
*/;
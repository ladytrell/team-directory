//const Employee = require('./lib/classes/Employee');
const Manager = require('./lib/classes/Manager');
const Engineer = require('./lib/classes/Engineer');
const Intern = require('./lib/classes/intern');
const { employeeQuestions, managerQuestion, githubQuestion, menuQuestion, schoolQuestion } = require('./lib/Questions');
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
        const {menuChoice: action} = await inquirer.prompt(menuQuestion);
        if(action === 'Exit'){
            return;
        } else {
            console.log('Enter Employee details\n');
            const answers = await inquirer.prompt(employeeQuestions);
            const github = await inquirer.prompt(githubQuestion);

            if(action === 'Add an Engineer'){
                const engineer = new Engineer(answers.name, answers.Id, answers.email, github.github);   
                this.engineers.push(engineer);
            } else if(action === 'Add an Intern') {
                const school = await inquirer.prompt(schoolQuestion);
                const intern = new Intern(answers.name, answers.Id, answers.email, github.github, school.school);  
                this.interns.push(intern);
            }
        }
        // Call function again to prompt user
        return await this.teamMemberDetails();
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
    }
}

const team = new teamBuilder();

team.init()
.then(() => {
    return generatePage(team);
}) 
// Call back to write the file with html created by generatePage
.then(data => {
    return writeFile(data);
})
// Display file created if the write is successful
.then(writeToFileResponse => {
    console.log(writeToFileResponse);
    copyFile();
})
// Catches and display error message
.catch(err => {
    console.log(err);
})
;
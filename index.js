const Employee = require('./lib/classes/Employee');
const Manager = require('./lib/classes/Manager');
const Engineer = require('./lib/classes/Engineer');
const Intern = require('./lib/classes/intern');
const { employeeQuestions, managerQuestion, githubQuestion, isInternQuestion, schoolQuestion, moreEmployeesQuestion } = require('./lib/Questions');
const inquirer =  require('inquirer');

// To Do Prompt for Employee
    //  manage and , engineer, 

// To Do Build HTML

// 

class teamBuilder {
    constructor (){
        this.manager = {};
        this.engineers = [];
        this.interns = [];
    }


    async teamMemberDetails () {
        console.log('Enter Employee details\n');
        const isIntern = await inquirer.prompt(isInternQuestion);
        const answers = await inquirer.prompt(employeeQuestions);
        const github = await inquirer.prompt(githubQuestion);

        if(!isIntern.employeeType){
            const engineer = new Engineer(answers.name, answers.Id, answers.email, github.github);   
            console.log(engineer)  
            this.engineers.push(engineer);
        } else {
            const school = await inquirer.prompt(schoolQuestion);
            const intern = new Intern(answers.name, answers.Id, answers.email, github.github, school.school);  
            console.log(intern)       
            this.interns.push(intern);
        }
        
        const addEmployee = await inquirer.prompt(moreEmployeesQuestion);
        
        if (addEmployee.more) {
            this.teamMemberDetails ();
        } else {
            return;
        }
        

    }

    async managerDetails() {     
        console.log('Enter Your details\n');   
        const answers = await inquirer.prompt(employeeQuestions);
        const officeNum = await inquirer.prompt(managerQuestion);
        this.manager = new Manager(answers.name, answers.Id, answers.email, officeNum);
        //console.log(answers);
        console.log(this.manager.getManager());
        this.teamMemberDetails();
    }

    init(){
        console.log("Welcome to Team Builder\n");
        this.managerDetails();
        //this.employeeMenu();
    }
}

const team = new teamBuilder();

team.teamMemberDetails();
//team.init();
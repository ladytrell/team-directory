module.exports = {
    employeeQuestions: [
        {
            type: 'input',
            name: 'name',
            message: 'Name:  ',
            validate: function(answer) {
                if(answer.length > 0) return true;
                return 'Please enter a name? '
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'Employee Id number:  ',
            validate: function(answer) {
                if(answer.length > 0) return true;
                return 'Please enter an Id? '
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address:  ',
            validate: function(answer) {
                if(answer.length > 0) return true;
                return 'Please enter your Id? '
            }
        }
    ],

    managerQuestion: [
        {
            type: 'input',
            name: 'officeNum',
            message: 'Office number:  ',
            validate: function(answer) {
                if(answer.length > 0) return true;
                return 'Please enter your Id? '
            }
        }
    ],    
    
    githubQuestion: [
        {
            type: 'input',
            name: 'github',
            message: 'Github user name:  ',
            validate: function(answer) {
                if(answer.length > 0) return true;
                return 'Please enter Github user name? '
            }
        }
    ],    
    
    isInternQuestion: [
        {
            type: 'confirm',
            name: 'employeeType',
            message: 'Is this an intern?',
             default: false
        }
    ],    
    
    schoolQuestion: [
        {
            type: 'input',
            name: 'school',
            message: 'Current School:  ',
            validate: function(answer) {
                if(answer.length > 0) return true;
                return 'Please enter a school? '
            }
        }
    ],
    
    moreEmployeesQuestion: [
        {
            type: 'confirm',
            name: 'more',
            message: 'Would you like to add another employee?',
             default: false
        }
    ]
}// End module.exports
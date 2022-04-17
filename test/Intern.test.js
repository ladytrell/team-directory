const Intern = require('../lib/classes/Intern');

describe('Intern class', () => {
  describe('Initialization', () => {
        it("should create a Intern object with 'name', 'id', 'email', 'github', 'school'", () => {
        //Create an Intern
        const intern = new Intern('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane', 'North Carolina Agricultural and Technical State University', 'North Carolina Agricultural and Technical State University');

        expect(intern.name).toEqual('Jane Doe'); 
        expect(intern.id).toEqual('415683'); 
        expect(intern.email).toEqual('jane.doe@company.com');        
        expect(intern.github).toEqual('doe-jane');        
        expect(intern.school).toEqual('North Carolina Agricultural and Technical State University');
        });
    });
 
    describe('getRole', () => {
        it('return employee\'s Role', () => {
        //Create an Intern
        const intern = new Intern('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane', 'North Carolina Agricultural and Technical State University');
        let value = intern.getRole();

        expect(value).toEqual('Intern');
        });
    });
 
    describe('getGithub', () => {
        it('return Intern\'s github user name', () => {
        //Create an Intern
        const intern = new Intern('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane', 'North Carolina Agricultural and Technical State University');
        let value = intern.getGithub();

        expect(value).toEqual('doe-jane');
        });
    });
 
    describe('getSchool', () => {
        it('return Intern\'s school', () => {
        //Create an Intern
        const intern = new Intern('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane', 'North Carolina Agricultural and Technical State University');
        let value = intern.getSchool();

        expect(value).toEqual('North Carolina Agricultural and Technical State University');
        });
    });
  
  
});
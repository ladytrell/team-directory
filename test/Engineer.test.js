const Engineer = require('../lib/classes/Engineer');

describe('Engineer class', () => {
  describe('Initialization', () => {
        it("should create a Engineer object with 'name', 'id', 'email', 'github'", () => {
        //Create an Engineer
        const engineer = new Engineer('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane');

        expect(engineer.name).toEqual('Jane Doe'); 
        expect(engineer.id).toEqual('415683'); 
        expect(engineer.email).toEqual('jane.doe@company.com');        
        expect(engineer.github).toEqual('doe-jane');
        });
    });
 
    describe('getRole', () => {
        it('return employee Role', () => {
        //Create an Engineer
        const engineer = new Engineer('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane');
        let value = engineer.getRole();

        expect(value).toEqual('Engineer');
        });
    });
 
    describe('getGithub', () => {
        it('return Engineer github user name', () => {
        //Create an Engineer
        const engineer = new Engineer('Jane Doe', '415683', 'jane.doe@company.com', 'doe-jane');
        let value = engineer.getGithub();

        expect(value).toEqual('doe-jane');
        });
    });
  
  
});
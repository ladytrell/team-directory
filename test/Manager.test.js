const Manager = require('../lib/classes/Manager');

describe('Manager class', () => {
  describe('Initialization', () => {
        it("should create a manager object with 'name', 'id', 'email', 'officeNum'", () => {
        //Create an manager
        const manager = new Manager('Jane Doe', '415683', 'jane.doe@company.com', 'QQ10');

        expect(manager.name).toEqual('Jane Doe'); 
        expect(manager.id).toEqual('415683'); 
        expect(manager.email).toEqual('jane.doe@company.com');        
        expect(manager.officeNum).toEqual('QQ10');
        });
    });
 
    describe('getRole', () => {
        it('return employee Role', () => {
        //Create an manager
        const manager = new Manager('Jane Doe', '415683', 'jane.doe@company.com', 'QQ10');
        let value = manager.getRole();

        expect(value).toEqual('Manager');
        });
    });
 
    describe('getOfficeNum', () => {
        it('return manager office number', () => {
        //Create an manager
        const manager = new Manager('Jane Doe', '415683', 'jane.doe@company.com', 'QQ10');
        let value = manager.getOfficeNum();

        expect(value).toEqual('QQ10');
        });
    });
  
  
});
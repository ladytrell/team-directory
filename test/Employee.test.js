const Employee = require('../lib/Employee');

describe('Employee class', () => {
  describe('Initialization', () => {
    it("should create an object with 'name', 'id', 'email'", () => {
      //Create an employee
      const employee = new Employee('Jane Doe', '415683', 'jane.doe@company.com');

      expect(employee.name).toEqual('Jane Doe'); 
      expect(employee.id).toEqual('415683'); 
      expect(employee.email).toEqual('jane.doe@company.com');
    });
  });

  describe('getName', () => {
    it('return employee name', () => {
      const employee = new Employee('Jane Doe', '415683', 'jane.doe@company.com');
      let name = employee.getName();

      expect(name).toEqual('Jane Doe');
    });
  });
  
  describe('getId', () => {
    it('return employee ID number', () => {
      const employee = new Employee('Jane Doe', '415683', 'jane.doe@company.com');
      let name = employee.getId();

      expect(name).toEqual('415683');
    });
  });
  
  describe('getEmail', () => {
    it('return employee email address', () => {
      const employee = new Employee('Jane Doe', '415683', 'jane.doe@company.com');
      let name = employee.getEmail();

      expect(name).toEqual('jane.doe@company.com');
    });
  });
  
  describe('getRole', () => {
    it('return employee Role', () => {
      const employee = new Employee('Jane Doe', '415683', 'jane.doe@company.com');
      let name = employee.getRole();

      expect(name).toEqual(expect.any(String));
    });
  });
  
});


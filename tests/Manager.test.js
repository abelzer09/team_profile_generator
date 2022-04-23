const Manager = require("../lib/manager");

describe('Manager class', () => {
    it('able to set name with constructer function', () => {
        const name = 'tom'
        const staff = new Manager(name)
        expect(staff.name).toEqual(name)
    });

    it('able to set id with constructer function', () => {
        const id = 7
        const ident = new Manager('sam', id)
        expect(ident.id).toBe(id)
    });

    it('able to set email with constructer function', () => {
        const email = 'peter@gmail.com'
        const mail = new Manager('peter', 1, email)
        expect(mail.email).toBe(email)
    });

    it('able to set office number with constructer function', () => {
        const officeNumber = 1
        const office = new Manager('joe', 3, 'joe@gmail.com', officeNumber)
        expect(office.officeNumber).toBe(officeNumber)
    });

    describe('getRole', () => {
        it('returns Role', () => {
          expect(new Manager('ryan', 1, 'ryan@gmail.com',"1").getRole()).toBe("Manager");
        });
    });

});
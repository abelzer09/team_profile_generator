const Employee = require("../lib/employee");


describe('Employee class', () => {
    it('able to set name with constructer function', () => {
        const name = 'tom'
        const staff = new Employee(name)
        expect(staff.name).toEqual(name)
    });

    it('able to set id with constructer function', () => {
        const id = 7
        const ident = new Employee('sam', id)
        expect(ident.id).toBe(id)
    });

    it('able to set email with constructer function', () => {
        const email = 'mike@gmail.com'
        const mail = new Employee('mike', 1, email)
        expect(mail.email).toEqual(email)
    });

    describe('getName', () => {
        it('returns Name', () => {
          expect(new Employee('ryan').getName()).toBe('ryan');
        });
    });

    describe('getId', () => {
        it('returns Id', () => {
          expect(id.getId()).toBe(1);
        });
    });
      

});


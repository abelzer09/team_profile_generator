const Intern = require("../lib/intern");

describe('Intern class', () => {
    it('able to set name with constructer function', () => {
        const name = 'tom'
        const staff = new Intern(name)
        expect(staff.name).toEqual(name)
    });

    it('able to set id with constructer function', () => {
        const id = 7
        const ident = new Intern('sam', id)
        expect(ident.id).toBe(id)
    });

    it('able to set email with constructer function', () => {
        const email = 'eric@gmail.com'
        const mail = new Intern('eric', 1, email)
        expect(mail.email).toBe(email)
    });

    it('able to set school with constructer function', () => {
        const school = 'UofM'
        const sch = new Intern('ryan', 1, 'ryan@gmail.com', school)
        expect(sch.school).toBe(school)
    });

    describe('getRole', () => {
        it('returns Role', () => {
          expect(new Intern('ryan', 1, 'ryan@gmail.com',"UofM").getRole()).toBe("Intern");
        });
    });

});
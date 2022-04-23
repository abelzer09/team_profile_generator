const Engineer = require("../lib/engineer");

describe('Engineer class', () => {
    it('able to set name with constructer function', () => {
        const name = 'tom'
        const staff = new Engineer(name)
        expect(staff.name).toEqual(name)
    });

    it('able to set id with constructer function', () => {
        const id = 7
        const ident = new Engineer('sam', id)
        expect(ident.id).toBe(id)
    });

    it('able to set email with constructer function', () => {
        const email = 'frank@gmail.com'
        const mail = new Engineer('frank', 1, email)
        expect(mail.email).toBe(email)
    });

    it('able to set github with constructer function', () => {
        const github = 'mike123'
        const gitHub = new Engineer('mike', 1, 'mike@gmail.com', github)
        expect(gitHub.github).toBe(github)
    });

    
    describe('getGitHub', () => {
        it('returns github', () => {
          expect(new Engineer('ryan', 1, 'ryan@gmail.com', "ryan0909").getGithub()).toBe("ryan0909");
        });
    });

    describe('getRole', () => {
        it('returns Role', () => {
          expect(new Engineer('ryan', 1, 'ryan@gmail.com',"ryan0909").getRole()).toBe("Engineer");
        });
    });

});
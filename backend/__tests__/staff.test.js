const staff = require('../controllers/staff.js');

describe('Bien une adresse email', () => {
    it('Doit être une email valide, comprennant un @, et un "."', () => {
        expect(staff.validateEmail('lgc.carlier@gmail.com')).toEqual(true);
    });
});
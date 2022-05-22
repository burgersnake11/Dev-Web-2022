const request = require('supertest');
const user = require('../models/User');
const app = require('../app.js');


describe('Login', () => {
    it('retourne true if the authentification is good', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'lgc.carlier@gmail.com', password:  'Logan'});

        expect(res.statusCode).toEqual(401);
    });

});
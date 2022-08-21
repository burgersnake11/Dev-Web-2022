const request = require('supertest');
const user = require('../models/User');
const app = require('../app.js');


describe('Login', () => {
    it("retourne true si l'authentification est correcte", async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'lgc.carlier@gmail.com', password:  'LoganLogan0@'});

        expect(res.statusCode).toEqual(200);
    }),
    it("retourne false si l'authentification est incorrecte", async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'lgc.carli.com', password:  'Logan'});

        expect(res.statusCode).toEqual(401);
    });
});
const mongoose = require('mongoose')

describe('Connection à la base de données', () => {
    it('retourne True si la connection est réussi à la base de données', () => {
        expect(mongoose.connect("mongodb+srv://Mathieu:J0uec581OeHWuz8j@cluster0.3dozm.mongodb.net/Dev3?retryWrites=true&w=majority"));
    })
})
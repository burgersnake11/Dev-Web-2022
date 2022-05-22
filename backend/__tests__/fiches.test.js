const request = require('supertest');
const user = require('../models/Fiches');
const app = require('../app.js');

describe('Register', () => {
    it('Say if the médical fiche of the child is add to the database', async () => {
        const res = await request(app)
        .post('/api/staff/fiches')
        .send({          
            "nom_enfant": "test",
            "prenom_enfant": "test",
            "adresse_enfant": "test",
            "ddn_enfant": "1999-09-06T00:00:00.000Z",
            "numero_registre_enfant": "1234",
            "facebook_autorisation": true,
            "nom_resp_1": "T",
            "adresse_resp_1": "T",
            "tel_resp_1": 1234,
            "email_resp_1": "T",
            "nom_resp_2": "T",
            "adresse_resp_2": "T",
            "tel_resp_2": 1234,
            "email_resp_2": "T",
            "tel_urgence": 1234,
            "tetanos": "2022-04-21T00:00:00.000Z",
            "groupe_sanguin": "T",
            "protection_nuit": false,
            "peur_nuit": true,
            "appareil_dentaire": false,
            "appareil_auditif": false,
            "diabete": false,
            "maladie_cardiaque": false,
            "affection_peau": true,
            "somnambulisme": false,
            "insomnie": false,
            "incontinence": false,
            "eczema": false,
            "asthme": true,
            "sinusite": false,
            "bronchite": false,
            "saignement_nez": false,
            "maux_tete": false,
            "maux_ventre": false,
            "constipation": false,
            "diarrhee": false,
            "vomissements": false,
            "mal_route": false,
            "acariens": true,
            "pollen": false,
            "soleil": false,
            "maquillage": true,
            "savon": false,
            "poils_animaux": false,
            "allergie_supplementaire": "T",
            "sais_nager": "Pas du tout",
            "sport_difficile": "T",
            "remarque_supplementaire": "T",
            "__v": 0,
            "id_groupe": 1,
            "payer": true,
            "id_parent" : 121346
        });

        expect(res.statusCode).toEqual(undefined);
    });

});




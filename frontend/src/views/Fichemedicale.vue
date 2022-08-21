<template>
    <h1>{{this.nom + ' ' + this.prenom}}</h1>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        content: null,
        prenom: '',
        nom: '',
        adresse: '',
        date: '',
        registre: '',
        facebook: null,
        nom_resp1: '',
        adresse_resp1: '',
        tel_resp1: '',
        email_resp1: '',
        nom_resp2: '',
        adresse_resp2: '',
        tel_resp2: '',
        email_resp2: '',
        tel_urgence: '',
        tetanos: '',
        groupe_sanguin: '',
        protection_nuit : null,
        peur_nuit: null,
        appareil_dentaire_amovible: null,
        appareil_auditif: null,
        diabete: false,
        maladie_cardiaque: false,
        affection_de_la_peau: false,
        somnambulisme: false,
        Insomnie: false,
        Incontinence: false,
        Eczema: false,
        Asthme: false,
        Sinusite: false,
        Bronchite: false,
        saignement_de_nez: false,
        maux_tete: false,
        maux_ventre: false,
        constipation: false,
        diarrhee: false,
        vomissements: false,
        mal_de_route: false,
        acariens: false,
        pollen: false,
        soleil: false,
        maquillage: false,
        savons: false,
        poils_animaux: false,
        autres_allergies: '',
        nager: '',
        activitees_difficiles: '',
        remarques_supplementaires: '',        
       
    }
  },
  mounted(){
      let query = {_id : this.$route.params.id};
      axios
        .get('https://testdev3heroku.herokuapp.com/api/staff/fiches', {params : query})
        .then(response => {
            this.content = response.data[0]
            this.prenom = this.content.prenom_enfant
            this.nom = this.content.nom_enfant
        })
  }
}
</script>
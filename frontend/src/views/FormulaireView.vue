<template>
    <div>
        <h1>Formulaire d'inscription</h1>
            <v-form>

                <v-text-field
                v-model="nom"
                label="Nom de l'enfant"
                required
                ></v-text-field>

                <v-text-field
                v-model="prenom"
                label="Prénom de l'enfant"
                required
                ></v-text-field>

                <v-text-field
                v-model="adresse"
                label="Adresse de l'enfant"
                required
                ></v-text-field>

                <v-text-field
                v-model="date"
                type="date"
                label="Date de naissance de l'enfant"
                required
                ></v-text-field>

                <v-text-field
                v-model="registre"
                label="Numéro de registre nationnal de l'enfant"
                required
                ></v-text-field>


                <p>Autorisez-vous à mettre les photos de votre enfant sur notre page Facebook ?</p>
                <v-radio-group
                  v-model="facebook"
                  row
                  required
                >
                  <v-radio
                    label="Oui"
                    value=true
                  ></v-radio>
                  <v-radio
                    label="Non"
                    value=false
                  ></v-radio>
                </v-radio-group>


              <p>RESPONSABLE 1</p>

                <v-text-field
                v-model="nom_resp1"
                label="Nom du responsable légal/ parent"
                require
                ></v-text-field>

                <v-text-field
                v-model="adresse_resp1"
                label="Adresse"
                required
                ></v-text-field>


                <v-text-field
                v-model="tel_resp1"
                label="Numéro de téléphone"
                required
                ></v-text-field>

                <v-text-field
                v-model="email_resp1"
                label="E-mail"
                required
                ></v-text-field>

              
              <p>RESPONSABLE 2</p>

                <v-text-field
                v-model="nom_resp2"
                label="Nom du responsable légal/ parent"
                required
                ></v-text-field>

                <v-text-field
                v-model="adresse_resp2"
                label="Adresse"
                required
                ></v-text-field>


                <v-text-field
                v-model="tel_resp2"
                label="Numéro de téléphone"
                required
                ></v-text-field>

                <v-text-field
                v-model="email_resp2"
                label="E-mail"
                required
                ></v-text-field>

              <p>En cas d'urgence</p>

                <v-text-field
                v-model="tel_urgence"
                label="Numéro de téléphone en cas d'urgence"
                required
                ></v-text-field>

              <p>SANTE</p>

                <v-text-field
                v-model="tetanos"
                type="date"
                label="Date du dernier vaccin tétanos"
                required
                ></v-text-field>

              <v-text-field
                v-model="groupe_sanguin"
                label="Groupe Sanguin"
                required
              ></v-text-field>

              
              <p>Porte-t-il une protection pour la nuit ?</p>
                <v-radio-group
                  v-model="protection_nuit"
                  row
                  required
                >
                  <v-radio
                    label="Oui"
                    value="true"
                  ></v-radio>
                  <v-radio
                    label="Non"
                    value="false"
                  ></v-radio>
                </v-radio-group>

                
              <p>A-t-il peur la nuit?</p>
                <v-radio-group
                  v-model="peur_nuit"
                  row
                  required
                >
                  <v-radio
                    label="Oui"
                    value="true"
                  ></v-radio>
                  <v-radio
                    label="Non"
                    value="false"
                  ></v-radio>
                </v-radio-group>




                <p>A-t-il un appareil dentaire amovible ?</p>
                <v-radio-group
                  v-model="appareil_dentaire_amovible"
                  row
                  required
                >
                  <v-radio
                    label="Oui"
                    value="true"
                  ></v-radio>
                  <v-radio
                    label="Non"
                    value="false"
                  ></v-radio>
                </v-radio-group>

              <p>A-t-il un appareil auditif ?</p>
                <v-radio-group
                  v-model="appareil_auditif"
                  row
                  required
                >
                  <v-radio
                    label="Oui"
                    value="true"
                  ></v-radio>
                  <v-radio
                    label="Non"
                    value="false"
                  ></v-radio>
                </v-radio-group>



              <p>MALADIE(s)</p>
              <v-checkbox
                v-model="diabete"
                label="Diabète"
                ></v-checkbox>


              <v-checkbox
                v-model="maladie_cardiaque"
                label="Maladie cardiaque"
                ></v-checkbox>

              <v-checkbox
                v-model="affection_de_la_peau"
                label="affection_peau"
                ></v-checkbox>

              <v-checkbox
                v-model="somnambulisme"
                label="Somnambulisme"
                ></v-checkbox>

              <v-checkbox
                v-model="Insomnie"
                label="Insomnie"
                ></v-checkbox>

              <v-checkbox
                v-model="Incontinence"
                label="Incontinence"
                ></v-checkbox>

              <v-checkbox
                v-model="Eczema"
                label="Eczéma"
                ></v-checkbox>

              <v-checkbox
                v-model="Asthme"
                label="Asthme"
                ></v-checkbox>

              <v-checkbox
                v-model="Sinusite"
                label="Sinusite"
                ></v-checkbox>

              <v-checkbox
                v-model="Bronchite"
                label="Bronchite"
                ></v-checkbox>

              <v-checkbox
                v-model="saignement_de_nez"
                label="Saignement de nez"
                ></v-checkbox>

              <v-checkbox
                v-model="maux_tete"
                label="Maux de tête"
                ></v-checkbox>

              <v-checkbox
                v-model="maux_ventre"
                label="Maux de ventre"
                ></v-checkbox>

              <v-checkbox
                v-model="constipation"
                label="Constipation"
                ></v-checkbox>

              <v-checkbox
                v-model="diarrhee"
                label="Diarrhée"
                ></v-checkbox>

              <v-checkbox
                v-model="vomissements"
                label="Vomissements"
                ></v-checkbox>

              <v-checkbox
                v-model="mal_de_route"
                label="Mal de route"
                ></v-checkbox>


              <p>ALLERGIE(s)</p>

              <v-checkbox
                v-model="acariens"
                label="Acariens"
                ></v-checkbox>


              <v-checkbox
                v-model="pollen"
                label="Pollen"
                ></v-checkbox>


              <v-checkbox
                v-model="soleil"
                label="Soleil"
                ></v-checkbox>


              <v-checkbox
                v-model="maquillage"
                label="Maquillage"
                ></v-checkbox>


              <v-checkbox
                v-model="savons"
                label="Savons"
                ></v-checkbox>


              <v-checkbox
                v-model="poils_animaux"
                label="Poils d'animaux"
                ></v-checkbox>


              <v-text-field
                v-model="autres_allergies"
                label="Autres à préciser (médicaments, aliments)"
              ></v-text-field>

              <p>JEUX - ACTIVITES SPORTIVES</p>

              <p>Sait il nager?</p>
                <v-radio-group
                  v-model="nager"
                  row
                  required
                >
                  <v-radio
                    label="Pas du tout"
                    value="Pas du tout"
                  ></v-radio>
                  <v-radio
                    label="Apprentissage"
                    value="Apprentissage"
                  ></v-radio>
                  <v-radio
                    label="Bien"
                    value="Bien"
                  ></v-radio>
                  <v-radio
                    label="Très bien"
                    value="Très bien"
                  ></v-radio>
                </v-radio-group>


              <v-text-field
                v-model="activitees_difficiles"
                label="Y-a-t-il des jeux ou activités sportives qu’il ne peut pas pratiquer, ou difficilement ?"
              ></v-text-field>


              <p>REMARQUES SUPPLEMENTAIRES</p>

              <v-text-field
                v-model="remarques_supplementaires"
                label="Y-a-t-il des précautions particulières à prendre pour sa sécurité et/ou son bien-être : un traitement médicamenteux, un régime alimentaire particulier, ses traits de caractère..."
              ></v-text-field>







                <v-btn
                class="mr-4"
                @click="recupereItem"
                >
                Envoyez les données
                </v-btn>


                <v-btn>
                Effacez les données
                </v-btn>
            </v-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
        return {
            nom: '',
            prenom: '',
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
            id_groupe: 0,
            content: '',
            id_parent: '',
            status: '',
        }
    },
  methods: {
    recupereItem() {
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          this.id_parent = userConnected.userId
          this.status = userConnected.status
      } else {
        return ("Utilisateur pas connecté")
      }
      let id_groupe = this.creerid();
      let item = {
        "nom_enfant": this.nom,
        "prenom_enfant": this.prenom,
        "adresse_enfant": this.adresse,
        "ddn_enfant": this.date,
        "numero_registre_enfant": this.registre,
        "facebook_autorisation": this.facebook,
        "nom_resp_1": this.nom_resp1,
        "adresse_resp_1": this.adresse_resp1,
        "tel_resp_1": this.tel_resp1,
        "email_resp_1": this.email_resp1,
        "nom_resp_2": this.nom_resp2,
        "adresse_resp_2": this.adresse_resp2,
        "tel_resp_2": this.tel_resp2,
        "email_resp_2": this.email_resp2,
        "tel_urgence": this.tel_urgence,
        "tetanos": this.tetanos,
        "groupe_sanguin": this.groupe_sanguin,
        "protection_nuit": this.protection_nuit,
        "peur_nuit": this.peur_nuit,
        "appareil_dentaire": this.appareil_dentaire_amovible,
        "appareil_auditif": this.appareil_auditif,
        "diabete": this.diabete,
        "maladie_cardiaque": this.maladie_cardiaque,
        "affection_peau": this.affection_de_la_peau,
        "somnambulisme": this.somnambulisme,
        "insomnie": this.Insomnie,
        "incontinence": this.Incontinence,
        "eczema": this.Eczema,
        "asthme": this.Asthme,
        "sinusite": this.Sinusite,
        "bronchite": this.Bronchite,
        "saignement_nez": this.saignement_de_nez,
        "maux_tete": this.maux_tete,
        "maux_ventre": this.maux_ventre,
        "constipation": this.constipation,
        "diarrhee": this.diarrhee,
        "vomissements": this.vomissements,
        "mal_route": this.mal_de_route,
        "acariens": this.acariens,
        "pollen": this.pollen,
        "soleil": this.soleil,
        "maquillage": this.maquillage,
        "savon": this.savons,
        "poils_animaux": this.poils_animaux,
        "allergie_supplementaire": this.autres_allergies,
        "sais_nager": this.nager,
        "sport_difficile": this.activitees_difficiles,
        "remarque_supplementaire": this.remarques_supplementaires,
        "id_groupe": id_groupe,
        "id_parent": this.id_parent,
        "payer": false,
      }
       if((this.nom === '') || (this.prenom === '') || (this.adresse === '') || (this.date === '') || (this.registre === '') || (this.facebook === null) || (this.nom_resp1 === '') || (this.adresse_resp1 === '') || (this.tel_resp1 === '') || (this.email_resp1 === '') || (this.tel_urgence === '') || (this.tetanos === '') || (this.groupe_sanguin === '') || (this.protection_nuit === null) || (this.peur_nuit === null) || (this.appareil_dentaire_amovible === null) || (this.appareil_auditif === null) || (this.nager === '')){
        alert("Veuillez compléter tous les champs obligatoires !")
        return
      } else if((!(this.verifierDate(this.date))) || (!(this.verifierDate(this.tetanos)))){
        alert("Les dates entrées ne conviennent pas !")
        return
      } else if(id_groupe == 5){
        alert("Enfant trop jeune/vieux pour être inscrit !")
        return
      } else {
        axios
        .post("https://localhost:3000/api/staff/fiches", item)
        .then((res) => {
          if(res.status == 201){
            alert("Enfant créé !")
            this.$router.push({
              name :'compte',
            })
          }
        })
        this.passerParent()
      }
    },
    verifierDate(dateverif){
      const date_jour = new Date();
      dateverif = new Date(dateverif);
      let diff = date_jour.getTime() - dateverif.getTime();
      if (diff < 0){
        return false
      }
      return true
    },
    calculerAge(){
      let date_naissance;
      const date_ajd = new Date();
      let annee_patro;
      let diff;
      let age_enfant;
      date_naissance = this.date;

      if (date_ajd.getMonth() + 1 < 9){
        annee_patro = date_ajd.getFullYear() - 1;
        annee_patro = annee_patro.toString() + "-09-01";
        annee_patro = new Date(annee_patro);
        date_naissance = new Date(date_naissance);
        diff = annee_patro.getTime() - date_naissance.getTime();
        age_enfant = diff / (1000 * 3600 * 24 * 365);
        return Math.floor(age_enfant)
      }else{
        annee_patro = date_ajd.getFullYear();
        annee_patro = annee_patro.toString() + "-09-01";
        annee_patro = new Date(annee_patro);
        date_naissance = new Date(date_naissance);
        diff = annee_patro.getTime() - date_naissance.getTime();
        age_enfant = diff / (1000 * 3600 * 24 * 365);
        return Math.floor(age_enfant)
      }
    },
    creerid(){
      let age_enfant = this.calculerAge();
      let id_groupe;
      if(age_enfant < 5 || age_enfant > 18){
        id_groupe = 5
        return id_groupe
      }
      else if(5 <= age_enfant && age_enfant <= 6){
        id_groupe = 0
        return id_groupe
      }
      else if(age_enfant > 6 && age_enfant <= 8){
        id_groupe = 1
        return id_groupe
      }
      else if(age_enfant > 8 && age_enfant <= 12){
        id_groupe = 2
        return id_groupe
      }
      else if(age_enfant > 12 && age_enfant <= 14){
        id_groupe = 3
        return id_groupe
      }
      else if(age_enfant > 14 && age_enfant <= 18){
        id_groupe = 4
        return id_groupe
      } 
    },
    passerParent(){
      if(this.status == "Utilisateur"){
        let compte_json = {
            _id : this.id_parent,
            status : "Parents"
        }
        axios
            .post("https://localhost:3000/api/compte/update", compte_json);
      }
    }
  }
}
</script>
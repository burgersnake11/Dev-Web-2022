<template>
  <v-app id="fiche">
    <h1>Fiches Médicales</h1>
    <v-main class="grey lighten-2"> 
        <v-container fluid id="allergie">
            <v-row align="center" justify="center">
                <v-col
                class="d-flex"
                cols="12"
                sm="6"
                >
                    <v-select
                    v-model="selectedallergie"
                    :items="allergie"
                    item-text="nomallergie"
                    label="Allergie(s)"
                    return-object
                    ></v-select>

                    <v-select
                    v-model="selectedmaladie"
                    :items="maladie"
                    item-text="nommaladie"
                    label="Maladie(s)"
                    return-object
                    ></v-select>

                    <v-text-field
                    v-model="recherche"
                    label="Rechercher..."
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
            <v-row justify="center">
                <v-btn @click="triage">Valider</v-btn>
                <v-btn @click="reinitialiser">Réinitialiser</v-btn>
            </v-row>
        <v-flex xs12 sm6 lg9 id="cadre">
                    <v-data-table
                        :headers="groupes[0]"
                        :items="section0"
                        :expand-icon="oui"
                        :items-per-page="5"
                        class="elevation-8"
                        @click:row="fiche"
                        id="poussin"          
                    >
                    </v-data-table>
                    <v-data-table
                        :headers="groupes[1]"
                        :items="section1"
                        :items-per-page="5"
                        class="elevation-8"
                        @click:row="fiche"                        
                        id="benjamins"
                    >
                    </v-data-table>
                    <v-data-table
                        :headers="groupes[2]"
                        :items="section2"
                        :items-per-page="5"
                        class="elevation-8"
                        @click:row="fiche"
                        id="chevaliers"

                    >
                    </v-data-table>
                    <v-data-table
                        :headers="groupes[3]"
                        :items="section3"
                        :items-per-page="5"
                        class="elevation-8"
                        @click:row="fiche"
                        id="conquerants"
                    >
                    </v-data-table>
                    <v-data-table
                        :headers="groupes[4]"
                        :items="section4"
                        :items-per-page="5"
                        class="elevation-8"
                        @click:row="fiche"
                        id="aventuriers"
                    >
                </v-data-table>
        </v-flex>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name:'fiche_enfants',
    ic: "mdi-book",
    data(){
        return{
            el : '#cadre',
            content: null,
            oui: "test",
            selectedallergie: null,
            selectedmaladie: null,
            recherche: null,
            maladie: [{nommaladie: "Diabète", value: "diabete"}, {nommaladie: "Maladie Cardiaque", value: "maladie_cardiaque"}, {nommaladie: "Affection de la peau", value: "affection_peau"}, {nommaladie: "Somnambulisme", value: "somnambulisme"}, {nommaladie: "Insomnie", value: "insomnie"}, {nommaladie: "Incontinence", value: "incontinence"}, {nommaladie: "Eczema", value: "eczema"}, {nommaladie: "Asthme", value: "asthme"}, {nommaladie: "Sinusite", value: "sinusite"}, {nommaladie: "Bronchite", value: "bronchite"}, {nommaladie: "Saignement de nez", value: "saignement_nez"}, {nommaladie: "Maux de tête", value: "maux_tete"}, {nommaladie: "Maux de ventre", value: "maux_ventre"}, {nommaladie: "Constipation", value: "constipation"}, {nommaladie: "Diarrhée", value: "diarrhee"}, {nommaladie: "Vomissements", value: "vomissements"}, {nommaladie: "Mal de route", value: "mal_route"}],
            allergie: [{nomallergie: 'Acariens', value : 'acariens'}, {nomallergie: 'Pollen', value : 'pollen'}, {nomallergie: 'Soleil', value : 'soleil'}, {nomallergie: 'Maquillage', value: 'maquillage'}, {nomallergie: 'Savon', value: 'savon'}, {nomallergie: "Poils d'animaux", value: "poils_animaux"}],
            groupes: [
                [{text: "Les Poussins", value: "nom_complet", class: "my-header-style"}],
                [{text: "Les Benjamines / Benjamins", value: "nom_complet", class:"my-header-style"}],
                [{text: "Les Etincelles / Chevalier", value: "nom_complet", class:"my-header-style"}],
                [{text: "Les Alpines / Conquérants", value: "nom_complet", class:"my-header-style"}],
                [{text: "Les Aventurières / Aventuriers", value: "nom_complet", class:"my-header-style"}]
            ],
            section0: [],
            section1: [],
            section2: [],
            section3: [],
            section4: [],
            id_enfant: [],
            colors: ["green", "yellow", "red", "purple","blue"]
        }
    },
    mounted(){
        this.$el.querySelector("#poussin").style.background = '#82e0aa';
        this.$el.querySelector("#benjamins").style.background = '#f7dc6f';
        this.$el.querySelector("#chevaliers").style.background = '#f8c471';
        this.$el.querySelector("#conquerants").style.background = '#ec7063';
        this.$el.querySelector("#aventuriers").style.background = '#bb8fce';
        axios
        .get('https://testdev3heroku.herokuapp.com/api/staff/fiches')
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
                if (this.content[i].id_groupe == 0){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section0.push(result);
                }
                if (this.content[i].id_groupe == 1){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section1.push(result);
                }
                if (this.content[i].id_groupe == 2){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section2.push(result);
                }
                if (this.content[i].id_groupe == 3){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section3.push(result);
                }
                if (this.content[i].id_groupe == 4){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section4.push(result);
                }
            }
        });
    },
    methods:{
        fiche(value){
            this.$router.push({
            path : `staff/${value.id}`
            })
        },
        triage(){
            let query_choisie;
            if((this.selectedallergie !==null) && (this.selectedmaladie !== null) && (this.recherche !== null)){
                alert("Veuillez choisir un seul filtre à la fois !");
                return;
            }
            else if((this.selectedallergie !== null) && (this.selectedmaladie ===null) && (this.recherche === null)){
                query_choisie = {[this.selectedallergie.value] : true};
            }
            else if((this.selectedallergie === null) && (this.selectedmaladie !== null) && (this.recherche === null)){
                query_choisie = {[this.selectedmaladie.value] : true};
            }
            else if(this.recherche !== null){
                if((this.selectedallergie === null) && (this.selectedmaladie === null)){
                    query_choisie = {recherche : this.recherche}
                }
                else if((this.selectedallergie !== null) && (this.selectedmaladie === null)){
                    query_choisie = {recherche : this.recherche, [this.selectedallergie.value] : true}
                }
                else if((this.selectedallergie === null) && (this.selectedmaladie !== null)){
                    query_choisie = {recherche : this.recherche, [this.selectedmaladie.value] : true}
                }
            }
            else if((this.selectedallergie === null) && (this.selectedmaladie === null) && (this.recherche === null)){
                alert("Veuillez choisir un filtre !")
                return;
            }
            else{
                alert("Veuillez choisir un seul filtre à la fois !");
                return;
            }
            axios.get('https://testdev3heroku.herokuapp.com/api/staff/fiches', {params: query_choisie})
            .then((response) => {
                this.content = response.data;
                this.section0 = [];
                this.section1 = [];
                this.section2 = [];
                this.section3 = [];
                this.section4 = [];
                let tousid = [];
                for (let i in this.content){
                    tousid.push(this.content[i].id_groupe);
                    if (this.content[i].id_groupe == 0){
                        let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                        this.section0.push(result);
                    }
                    if (this.content[i].id_groupe == 1){
                        let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                        this.section1.push(result);
                    }
                    if (this.content[i].id_groupe == 2){
                        let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                        this.section2.push(result);
                    }
                    if (this.content[i].id_groupe == 3){
                        let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                        this.section3.push(result);
                    }
                    if (this.content[i].id_groupe == 4){
                        let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                        this.section4.push(result);
                    }
                }
                for(let i = 0; i <= 4; i++){
                    if(!(String(tousid).includes(i))){
                        if(i == 0){
                            this.$el.querySelector("#poussin").style.background = 'white';
                        }
                        if(i == 1){
                            this.$el.querySelector("#benjamins").style.background = 'white';
                        }
                        if(i == 2){
                            this.$el.querySelector("#chevaliers").style.background = 'white';
                        }
                        if(i == 3){
                            this.$el.querySelector("#conquerants").style.background = 'white';
                        }
                        if(i == 4){
                            this.$el.querySelector("#aventuriers").style.background = 'white';
                        }
                    } else {
                        if(i == 0){
                            this.$el.querySelector("#poussin").style.background = '#82e0aa';
                        }
                        if(i == 1){
                            this.$el.querySelector("#benjamins").style.background = '#f7dc6f';
                        }
                        if(i == 2){
                            this.$el.querySelector("#chevaliers").style.background = '#f8c471';
                        }
                        if(i == 3){
                            this.$el.querySelector("#conquerants").style.background = '#ec7063';
                        }
                        if(i == 4){
                            this.$el.querySelector("#aventuriers").style.background = '#bb8fce';
                        }
                    }
                }
            })
        },
        reinitialiser(){
        this.$el.querySelector("#poussin").style.background = '#82e0aa';
        this.$el.querySelector("#benjamins").style.background = '#f7dc6f';
        this.$el.querySelector("#chevaliers").style.background = '#f8c471';
        this.$el.querySelector("#conquerants").style.background = '#ec7063';
        this.$el.querySelector("#aventuriers").style.background = '#bb8fce';
        axios
        .get('https://testdev3heroku.herokuapp.com/api/staff/fiches')
        .then((response) => {
            this.content = response.data;
                this.section0 = [];
                this.section1 = [];
                this.section2 = [];
                this.section3 = [];
                this.section4 = [];
                this.selectedallergie = null;
                this.selectedmaladie = null;
                this.recherche = null;
            for (let i in this.content){
                if (this.content[i].id_groupe == 0){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section0.push(result);
                }
                if (this.content[i].id_groupe == 1){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section1.push(result);
                }
                if (this.content[i].id_groupe == 2){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section2.push(result);
                }
                if (this.content[i].id_groupe == 3){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section3.push(result);
                }
                if (this.content[i].id_groupe == 4){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
                    this.section4.push(result);
                }
            }
        });
    }
    }
}
</script>
<style scoped>
#allergie{
    max-width: 1200px;
}
.v-select{
    margin-right: 20px;
}
.v-btn{
    margin-right: 5px;
    margin-bottom: 20px;
}
#cadre{
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 20px;
    font-style: oblique;
    margin: auto;
}
#poussin{
    background-color:   #fff;
    width: 300px;
}
#benjamins{
    background-color:  #fff ;
}
#chevaliers{
    background-color:  #fff ;
}
#conquerants{
    background-color:  #fff ;
}
#aventuriers{
    background-color:  #fff ;
}
</style>
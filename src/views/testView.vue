<template>
  <v-app id="fiche">
    <h1>Fiches Médicales</h1>
    <v-main class="grey lighten-2">  
      <v-flex xs12 sm6 lg3 v-for="(indice, i) in groupes" :key="i">
        <v-data-table
            :headers="groupes[0]"
            :items="section0"
            :items-per-page="5"
            class="elevation-4"
        >
        </v-data-table>
        <v-data-table
            :headers="groupes[1]"
            :items="section1"
            :items-per-page="5"
            class="elevation-4"
        >
        </v-data-table>
        <v-data-table
            :headers="groupes[2]"
            :items="section2"
            :items-per-page="5"
            class="elevation-4"
        >
        </v-data-table>
        <v-data-table
            :headers="groupes[3]"
            :items="section3"
            :items-per-page="5"
            class="elevation-4"
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
            content: null,
            groupes: [
                [{text: "Les Poussins", value: "nom_complet"}],
                [{text: "Les Benjamines / Benjamins", value: "nom_complet"}],
                [{text: "Les Etincelles / Chevalier", value: "nom_complet"}],
                [{text: "Les Alpines / Conquérants", value: "nom_complet"}]
            ],
            section0: [],
            section1: [],
            section2: [],
            section3: [],

            colors: ["green", "yellow", "red", "purple","blue"]
        }
    },
    mounted(){
        axios
        .get('http://localhost:8000/fiches')
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
                if (this.content[i].id_groupe == 0){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant};
                    this.section0.push(result);
                }
                if (this.content[i].id_groupe == 1){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant};
                    this.section1.push(result);
                }
                if (this.content[i].id_groupe == 2){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant};
                    this.section2.push(result);
                }
                if (this.content[i].id_groupe == 3){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant};
                    this.section3.push(result);
                }
            }
        });
    }
}
</script>
<style>
</style>
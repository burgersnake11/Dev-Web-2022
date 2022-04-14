<template>
  <v-app id="fiche">
    <h1>Fiches Médicales</h1>
    <v-main class="grey lighten-2">
        
      <v-flex xs12 sm6 lg3 v-for="(indice, i) in groupes" :key="i">
        <v-data-table
            :headers="i.text"
            :items="groupes"
            :items-per-page="5"
            class="elevation-1"
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
                {text: "Les Poussins", value: "0"},
                {text: "Les Benjamines / Benjamins", value: "1"},
                {text: "Les Etincelles / Chevalier", value: "2"},
                {text: "Les Alpines / Conquérants", value: "3"},
                {text: "Les Grandes / Grands", value: "4"}
            ],
            section0: [],
            section1: [],
            section2: [],
            section3: [],
            section4: [],

            groupe: ["Les poussins", "Les Benjamines / Benjamins", "Les Etincelles / Chevalier", "Les Alpines / Conquérants", "Les Aventurières / Conquérants", "Les Grandes / Grands"],
            colors: ["green", "yellow", "red", "purple","blue"]
        }
    },
    mounted(){
        axios
        .get('http://localhost:8000/affichage')
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
                if (this.content[i].id_groupe == 0){
                    this.section0.push(this.content[i]);
                    console.log(this.section0);
                }
                if (this.content[i].id_groupe == 1){
                    this.section1.push(this.content[i]);
                }
                if (this.content[i].id_groupe == 2){
                    this.section2.push(this.content[i]);
                }
                if (this.content[i].id_groupe == 3){
                    this.section3.push(this.content[i]);
                }
                if (this.content[i].id_groupe == 4){
                    this.section4.push(this.content[i]);
                }
            }


        });
    }
}
</script>
<style>
</style>
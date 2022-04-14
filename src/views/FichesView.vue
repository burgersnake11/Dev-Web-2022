<template>
  <v-app id="fiche">
    <h1>Fiches Médicales</h1>
    <v-main class="grey lighten-2">
      <v-flex xs12 sm6 lg3 v-for="(indice, i) in groupes" :key="i">
        <v-card height="80" :class="colors[i]">{{indice}}
          <v-list v-for="index  in content" :key="index">
            <v-list-tile v-if="index.id_groupe == i">
              <v-card class="text-center ma-3">
                 <v-card-text>
                      <div class="subheading">{{index.nom_enfant}} {{index.prenom_enfant}}</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn color='grey lighten-1'>
                      <v-icon small center>{{ic}}</v-icon>
                      <span>Fiche</span>
                      </v-btn>
                  </v-card-actions>
              </v-card>
            </v-list-tile>
          </v-list>
        </v-card>
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
            groupes: ["Les poussins", "Les Benjamines / Benjamins", "Les Etincelles / Chevalier", "Les Alpines / Conquérants", "Les Aventurières / Conquérants", "Les Grandes / Grands"],
            colors: ["green", "yellow", "red", "purple","blue"]
        }
    },
    mounted(){
        axios
        .get('http://localhost:8000/fiches')
        .then((response) => {
            this.content = response.data;
            console.log(this.content);
        });
    }
}
</script>
<style>
</style>
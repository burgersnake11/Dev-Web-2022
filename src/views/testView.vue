<template>
  <v-app id="fiche">
    <h1>Fiches Médicales</h1>
    <v-main class="grey lighten-2">  
      <v-flex xs12 sm6 lg9 id="cadre">
                <v-data-table
                    :headers="groupes[0]"
                    :items="section0"
                    :items-per-page="5"
                    class="elevation-8"
                    id="poussin"          
                >
                </v-data-table>
                <v-data-table
                    :headers="groupes[1]"
                    :items="section1"
                    :items-per-page="5"
                    class="elevation-8"
                    id="benjamins"
                >
                </v-data-table>
                <v-data-table
                    :headers="groupes[2]"
                    :items="section2"
                    :items-per-page="5"
                    class="elevation-8"
                    id="chevaliers"

                >
                </v-data-table>
                <v-data-table
                    :headers="groupes[3]"
                    :items="section3"
                    :items-per-page="5"
                    class="elevation-8"
                    id="conquerants"
                >
                </v-data-table>
                <v-data-table
                    :headers="groupes[4]"
                    :items="section4"
                    :items-per-page="5"
                    class="elevation-8"
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
            content: null,
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
                if (this.content[i].id_groupe == 4){
                    let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant};
                    this.section4.push(result);
                }
            }
        });
    }
}
</script>
<style scoped>
#cadre{
    max-width: 1600px;
    display: grid;
    margin: 150px auto;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 20px;
    font-style: oblique;

}

#poussin{
    background-color:   #82e0aa;
    width: 300px;
}

#benjamins{
    background-color:  #f7dc6f ;
}
#chevaliers{
    background-color:  #f8c471 ;
}
#conquerants{
    background-color:  #ec7063 ;
}
#aventuriers{
    background-color:  #bb8fce ;
}

</style>
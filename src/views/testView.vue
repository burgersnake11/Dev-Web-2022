<template>
    <v-app>
        <h1>Liste des fiches</h1>
            <v-card class="elevation-8">
                <v-list id="liste">
                    <v-list-item-group>
                        <v-list-title>
                            Les Poussins
                        </v-list-title>
                        <v-divider></v-divider>
                        <v-list-item v-for="i in section0" :key="i">
                                    <v-list-item-content>
                                        {{i.nom_complet}}
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn>
                                            Fiche
                                        </v-btn>
                                    </v-list-item-action>                                                      
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
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
<style>
#liste{
    background-color:   #abebc6 ;
}
</style>
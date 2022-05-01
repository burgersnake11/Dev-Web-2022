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
                        <v-list-item v-for="i in content" :key="i">
                                    <v-list-item-content>
                                        {{i.nom_enfant}} {{i.prenom_enfant}}
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
            <v-card>
                <h1>Fiche médicale</h1>
                <v-card-content v-for="e in content" :key="e">
                    <p>
                        {{e.nom_enfant}}
                    </p>
                    
                </v-card-content>
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
        .get('http://localhost:3000/api/fiches')
        .then((response) => {
            this.content = response.data;
            console.log(this.content);
        });
    }
}
</script>
<style>
#liste{
    background-color:   #abebc6 ;
}
</style>
<template>
    <v-app id="cartes">
        <v-flex xs12 sm6 lg3 v-for="index in content" :key="index">
            <v-card class="text-center ma-3" >

                <v-card-text>
                    <div class="subheading">{{index.nom_enfant}} {{index.prenom_enfant}}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color='grey lighten-1'>
                    <v-icon small center>{{ic}}</v-icon>
                    <span>Fiche</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name:'cartes_enfants',
    ic: "mdi-book",
    data(){
        return{
            content: null,
        }
    },
    mounted(){
        axios
        .get('http://localhost:8000/affichage')
        .then((response) => {
            this.content = response.data;
            console.log(this.content);
        });
    }
}
</script>
	//ajout de quelque chose sur un repos distant
<style scoped>

</style>

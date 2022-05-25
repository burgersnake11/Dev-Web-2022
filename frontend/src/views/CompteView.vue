<template>
  <v-app>
    <div>
      <h1>Liste de vos enfants</h1>
    </div>
    <v-data-table
      :headers="enfants_parents"
      :items="fiches_enfants"
      :items-per-page="5"
      class="elevation-8"
      @click:row="fiche"
      id="poussin"          
    >
    </v-data-table>
    <div>
      <h1>Inscrire un enfant?</h1>
      <v-btn @click="inscription">Inscrire un enfant?</v-btn>
    </div>
    <div>
      <h1>Se déconnecter</h1>
      <v-btn @click="deconnexion">Se déconnecter</v-btn>
    </div>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          content: '',
          id_parent: '',
          fiches_enfants: [],
          enfants_parents: [{
            text: 'Nom des enfants',
            align: 'start',
            sortable: false,
            value: 'nom_complet',
          }]
        }
    },
    mounted() {
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
      } else {
        return ("Utilisteur pas connecté")
      }
      this.compte = [];
      if(this.id_parent !== undefined){
        let parent_json = {id_parent : this.id_parent};
        axios
        .get("https://localhost:3000/api/compte/fiches", {params :parent_json})
        .then((response) => {
          this.content = response.data;
          this.fiches_enfants;
          if(this.content[0] == undefined){
            let result = {nom_complet : "Vous n'avez pas encore d'enfants"}
            this.fiches_enfants.push(result);
          } else  {
            for (let i in this.content){
              let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant, id : this.content[i]._id};
              this.fiches_enfants.push(result);
            }
          }
        })
      }
    },
    methods : {
        inscription () {
          this.$router.push({
            name: 'formulaire',
          }) 
        },
        deconnexion() {
          window.location.reload()
        },
        fiche(value){
          this.$router.push({
          path : `compte/${value.id}`
          })
        }
    }
}
</script>

<style >
</style>
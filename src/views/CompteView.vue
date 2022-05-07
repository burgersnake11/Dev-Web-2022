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
      id="poussin"          
    >
    </v-data-table>
    <div>
      <h1>Inscrire un enfant?</h1>
      <v-btn @click="inscription">Inscrire un enfant?</v-btn>
    </div>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          content: '',
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
      let id_parent = this.$route.params.id_parent;
      let token = this.$route.params.token;
      this.compte = [];
      if(id_parent !== undefined){
        let parent_json = {id_parent : id_parent};
        axios
        .get("http://localhost:3000/api/staff/fiches", {params :parent_json})
        .then((response) => {
          this.content = response.data;
          this.fiches_enfants;
          if(this.content[0] == undefined){
            let result = {nom_complet : "Vous n'avez pas encore d'enfants"}
            this.fiches_enfants.push(result);
          } else  {
            for (let i in this.content){
              let result = {nom_complet: this.content[i].nom_enfant + " " + this.content[i].prenom_enfant};
              this.fiches_enfants.push(result);
            }
          }
        })
      }
    },
    methods : {
        inscription () {
          let id_parent = this.$route.params.id_parent;
          let status =  this.$route.params.status;
          this.$router.push({
            name: 'formulaire',
            params : 
              {'id_parent' : id_parent, 'status': status}
          }) 
        },
        test() {
  
        }
    }
}
</script>

<style >
</style>
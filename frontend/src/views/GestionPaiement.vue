<template>
  <v-data-table
    :headers="headers"
    :items="comptes"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
        <v-container fluid >
            <v-row align="center" justify="center">
                <v-col
                class="d-flex"
                cols="12"
                sm="6"
                >
                    <v-text-field
                    v-model="recherche"
                    label="Rechercher..."
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
            <v-row justify="center">
                <v-btn @click="triage" id="recherche">Valider</v-btn>
            </v-row>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Comptes :</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template  v-slot:item.actions="{ item }" >
      <v-checkbox
        v-model="checked[item.id-1]"
        @change="test(item)"
      >
      </v-checkbox>  
    </template>
  </v-data-table>
</template>
<script>
    import axios from 'axios'
  export default {
    data: () => ({
      checked: [],
      dialog: false,
      headers: [
        {text: "Id",value: 'id'},
        {
          text: 'Nom du compte',
          align: 'start',
          sortable: false,
          value: 'nom',
        },
        { text: "Prénom de l'enfant", value: 'prenom' },
        { text: "Payer", value: 'payer'},
        { text: 'Paiement', value: 'actions', sortable: false},
      ],
      recherche: null,
      idInDb: [],
      comptes: [],
      editedIndex: -1,
      editedItem: {
        nom: '',
        prenom: 0,
        actions: false,
      },
      defaultItem: {
        nom: '',
        prenom: 0,
        actions: false,
      },
    }),
    
    created () {
      this.initialize()
    },

    methods: {
    initialize () {
        axios
        .get('http://localhost:3000/api/staff/fiches')
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
              let checked_payer = this.content[i].payer
              this.checked.push(checked_payer)
              let paiement;
              if(this.content[i].payer == true){
              paiement = "Payé"
              } else {
              paiement = "Non payé"
              }
                let j={
                    id: Number(i)+1,
                    nom: this.content[i].nom_enfant,
                    prenom: this.content[i].prenom_enfant,
                    payer: paiement
                }
                this.idInDb.push(this.content[i]._id)
                this.comptes.push(j) 
            }
        });
    },
    triage(){
        this.comptes= [];
        this.checked = [];
        this.idInDb= [];
        let query_choisie;
        if(this.recherche !== null){
            query_choisie = {recherche : this.recherche}
        }
        else if(this.recherche === null){
            alert("Veuillez choisir un filtre !")
        }
        axios.get('http://localhost:3000/api/staff/fiches', {params: query_choisie})
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
              let checked_payer = this.content[i].payer
              this.checked.push(checked_payer)
                let paiement;
                if(this.content[i].payer == true){
                paiement = "Payé"
                } else {
                paiement = "Non payé"
                }
                let j={
                    id: Number(i)+1,
                    nom: this.content[i].nom_enfant,
                    prenom: this.content[i].prenom_enfant,
                    payer: paiement,
                }
                this.idInDb.push(this.content[i]._id)
                this.comptes.push(j) 
            }
        })
    },
    save (editedItem) {
      axios
          .post("http://localhost:3000/api/staff/paiement", editedItem);
    },
    test (item) {
      let i
      if (item.payer == "Payé"){
         item.payer = "Non payé"
         i = false
      }
      else {
         item.payer = "Payé" 
         i = true
      }
      let compte_change = {
        _id: this.idInDb[Number(item.id)-1],
        payer: i
      }
      this.save(compte_change)

    }
  },
}
</script>
<style>
#recherche{
    margin:50px
}

</style>
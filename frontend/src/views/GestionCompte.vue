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
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5"></span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                    <v-select
                      :items="role"
                      v-model="editedItem.status"
                      label="status"
                    ></v-select>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog  v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6">Êtes-vous sûr de vouloir supprimer ce compte ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
    import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false, 
      recherche: null,
      headers: [
        { text : 'Nom du compte', value: 'nom'},
        { text : 'Prénom du compte', value: 'prenom'},
        {
          text: 'Email du compte',
          align: 'start',
          sortable: false,
          value: 'email',
        },
        { text: 'Status du compte', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      role: [
        "Admin",
        "Parents",
        "Cuistot",
        "Animateur",
        "Trésorier",
        "Utilisateur"
      ],
      comptes: [],
      editedIndex: -1,
      deletedIndex: -1,
      editedItem: {
        email: '',
        status: 0,
      },
      deletedItem: {
        email: ''
      },
      defaultItem: {
        email: '',
        status: 0,
      },
    }),
    
    created () {
      this.initialize()
    },
    methods: {
    initialize () {
        this.comptes = [];
        axios
        .get('http://176.96.231.165:3000/api/gestion/users')
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
                let j={
                    nom : this.content[i].nom,
                    prenom : this.content[i].prenom,
                    email: this.content[i].email,
                    status: this.content[i].status,
                }
                this.comptes.push(j)
            }
        });
    },
    triage(){
        let query_choisie;
        if(this.recherche !== null){
            query_choisie = {recherche : this.recherche}
        }
        else if(this.recherche === null){
            alert("Veuillez choisir un filtre !")
        }
        axios.get('http://176.96.231.165:3000/api/gestion/users', {params: query_choisie})
        .then((response) => {
            this.content = response.data;
            this.comptes=[]
            for (let i in this.content){
                let j={
                    nom : this.content[i].nom,
                    prenom : this.content[i].prenom,
                    email: this.content[i].email,
                    status: this.content[i].status,
                }
                this.comptes.push(j) 
            }
        })
    },
      editItem (item) {
        this.editedIndex = this.comptes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
      },
      save () {
        Object.assign(this.comptes[this.editedIndex], this.editedItem)
        let compte_json = {
            email : this.comptes[this.editedIndex].email,
            status : this.editedItem.status
        }
        axios
            .post("http://176.96.231.165:3000/api/gestion/update", compte_json);
        this.close()
      },
      deleteItemConfirm(){
        let email_json = {
          email : this.deletedItem.email
          }
        axios
            .post("http://176.96.231.165:3000/api/gestion/delete",email_json)
        this.initialize();
        this.closeDelete();
      },
      deleteItem(item) {
        this.deletedIndex = this.comptes.indexOf(item)
        this.deletedItem = Object.assign({}, item)

        this.dialogDelete = true
      }
      
    },
  }
</script>
<style>
#recherche{
    margin:50px
}
</style>
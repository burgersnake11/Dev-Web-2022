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
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> 
    </template>
  </v-data-table>
</template>
<script>
    import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      recherche: null,
      headers: [
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
      editedItem: {
        email: '',
        status: 0,
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
        .get('http://localhost:3000/api/gestion/users')
        .then((response) => {
            this.content = response.data;
            for (let i in this.content){
                let j={
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
        axios.get('http://localhost:3000/api/gestion/users', {params: query_choisie})
        .then((response) => {
            this.content = response.data;
            this.comptes=[]
            for (let i in this.content){
                let j={
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
      save () {
        Object.assign(this.comptes[this.editedIndex], this.editedItem)
        let compte_json = {
            email : this.comptes[this.editedIndex].email,
            status : this.editedItem.status
        }
        axios
            .post("http://localhost:3000/api/gestion/update", compte_json);
        this.close()
      },
    },
  }
</script>
<style>
#recherche{
    margin:50px
}
</style>
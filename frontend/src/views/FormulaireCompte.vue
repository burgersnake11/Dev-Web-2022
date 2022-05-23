<template>
    <div>
        <h1>Créer votre compte!</h1>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="nom_compte"
                        label="Nom du parent"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                        v-model="prenom_compte"
                        label="Prénom du parent"
                        required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-text-field
                v-model="email_compte"
                label="Adresse Email"
                required
                ></v-text-field>

                <v-text-field
                v-model="mdp_compte"
                label="Mot de passe"
                required
                ></v-text-field>

                <v-text-field
                v-model="mdp_compte2"
                label="Retaper votre mot de passe"
                required
                ></v-text-field>

                <v-btn
                class="mr-4"
                @click="test"
                >
                Créer mon compte!
                </v-btn>
                <br>
                <br>
                <p class="font-weight-thin">
                Vous avez déja un compte?
                </p>
                <v-btn to="/connection">Je me connecte !</v-btn>
            </v-form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            nom_compte: '',
            prenom_compte: '',
            email_compte: '',
            mdp_compte: '',
            mdp_compte2: '',
        }
    },
    methods : {
test(){
            if(this.nom_compte == "" || this.prenom_compte=="" || this.email_compte=="" || this.mdp_compte =="" || this.mdp_compte2 == "" ) {
                alert("Veuillez compléter tous les champs");
            } else {
                //axios.get('findone {email}') 
                let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
                if (this.email_compte.match(regexEmail)) {
                    if (this.mdp_compte.match( /[0-9]/g) && 
                    this.mdp_compte.match( /[A-Z]/g) && 
                    this.mdp_compte.match(/[a-z]/g) && 
                    this.mdp_compte.match( /[^a-zA-Z\d]/g) &&
                    this.mdp_compte.length >= 12) {
                        if (this.mdp_compte != this.mdp_compte2) {
                            alert("Vos mots de passe ne sont pas identiques");
                        } else {
                            let user = {
                                nom : this.nom_compte,
                                prenom: this.prenom_compte,
                                email: this.email_compte,
                                password: this.mdp_compte,
                                status : "Utilisateur"
                            }
                            axios
                                .post("http://localhost:3000/api/auth/signup", user)
                                .then((response) => {
                                    let id_parent = response.data.userId
                                    if (response.status == 201){
                                        this.$router.push({name: "home"})
                                    }
                                }).catch(res => {
                                    alert("Cette adresse email est déja utilisée.")
                                })
                        }
                    } else {
                        alert("Votre mot de passe doit contenir une majuscule, une minuscule, un chiffre et doit faire au moins 12 caractères");
                    }
                } else{
                    alert("L'adresse email n'est pas valide")
                }
            }
        }
    }
}
</script>
<style>
</style>
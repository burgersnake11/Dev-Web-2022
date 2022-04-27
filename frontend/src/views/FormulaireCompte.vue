<template>
    <div>
        <h1>Créer votre compte!</h1>
            <v-form>
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
            email_compte: '',
            mdp_compte: '',
            mdp_compte2: '',
        }
    },
    methods : {
        test() {
            
            if (this.mdp_compte != this.mdp_compte2) {
                alert("Les deux mots de passe ne sont pas identiques");
            } else {
                let user = {
                    email: this.email_compte,
                    password: this.mdp_compte
                }
                axios
                    .post("http://127.0.0.1:3000/api/auth/signup", user);
                console.log(user)
            }
        }
    }
}
</script>



<style>

</style>


<!-- $v est nécessaire pour vuelidate -->
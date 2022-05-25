<template>
    <div>
        <h1>Connectez vous !</h1>
            <v-form>
                <v-text-field
                v-model="email_compte"
                label="Adresse Email"
                required
                ></v-text-field>

                <v-text-field
                v-model="mdp_compte"
                id="input_password"
                type="password"
                label="Mot de passe"
                required
                ></v-text-field>

                <v-btn
                class="mr-4"
                @click="connected"
                >
                Me connecter!
                </v-btn>
                <br>
                <br>
                <p class="font-weight-thin">
                Pas de compte?
                </p>
                <v-btn to="/creation">Je me crée un compte !</v-btn>
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
        }
    },
    methods : {
        connected() {
            let user = {
                email: this.email_compte,
                password: this.mdp_compte         
            };
                axios
                    .post("http://127.0.0.1:3000/api/auth/login", user)
                    .then((response) => {
                        let id_parent = response.data.userId;
                        let status = response.data.status;
                        let token = response.data.token
                        axios.defaults.headers.common['Authorization'] = `Bearer ` + token
                        if (response.status == 200) {
                            this.$router.push({
                                name: 'compte'
                            })
                        }
                    })
                    .catch((res) => {
                        alert("L'adresse email ou le mot de passe n'est pas correct")
                    });
        },
        test() {
            pass
        }
    }
}
</script>



<style>

</style>
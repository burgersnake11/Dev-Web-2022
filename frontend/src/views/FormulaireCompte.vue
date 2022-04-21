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
                TEST
                </v-btn>
            </v-form>
    </div>
</template>



<script>
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
            console.log(this.email_compte, this.mdp_compte);
        }
    }
}
</script>



<style>

</style>


<!-- $v est nécessaire pour vuelidate -->
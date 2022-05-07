<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-btn :to='"/"' class="button">Accueil</v-btn>
      <v-btn :to='"/staff"' class="button">Staff</v-btn>
      <v-btn :to='accueil' class="button">Blog</v-btn>
      <v-btn :to='"/contact"' class="button">Contact</v-btn>
      <v-btn :to='"/formulaire"' class="button">Formulaire</v-btn>
      <v-btn :to='"/creation"' class="button">Compte</v-btn>
      <v-btn :to='"/gestion"' class="button">Gestion</v-btn>
      <v-btn :to='"/paiement"' class="button">Paiement</v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        ],
      nom: "Margaret",
      statut: "Connecté(e)",
      accueil: "/",
      profil: "mdi-account-circle"
    }),
  }
</script>

<style>
.button {
  background-color: red;
}
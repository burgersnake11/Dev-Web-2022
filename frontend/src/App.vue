<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-btn :to='"/"' class="button">Accueil</v-btn>
      <v-btn :to='"/"' class="button">Blog</v-btn>
      <v-btn :to='"/contact"' class="button">Contact</v-btn>
      <v-btn :to='"/formulaire"' v-if='status=="Trésorier" || status=="Admin" || status=="Animateur" || status=="Cuistot" || status=="Utilisateur" || status=="Parents"' class="button">Formulaire</v-btn>
      <v-btn :to='"/gestion"' v-if='status=="Admin"' class="button">Gestion</v-btn>
      <v-btn :to='"/paiement"' v-if='status=="Trésorier" || status=="Admin"' class="button">Paiement</v-btn>
      <v-btn :to='"/staff"' v-if='status=="Trésorier" || status=="Admin" || status=="Animateur" || status=="Cuistot"' class="button">Staff</v-btn>
      <v-btn :to='"/creation"' v-if='connected==false' class="button">Connexion</v-btn>
      <v-btn :to='"/compte"' v-if='connected==true' class="button">Compte</v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import axios from "axios"
  export default {
    data: () => ({
      status : "",
      connected : false,
    }),
    updated(){
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          this.status = userConnected.status
          this.connected = true;
      } else {
        return ("Utilisteur pas connecté")
      }
    }
  }
</script>

<style>
.button {
  background-color: red;
}
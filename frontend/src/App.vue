<template>
  <v-app id="all_page">

    <v-app-bar class='light-green withe__text' app>
      <v-btn :to='"/"' class="green withe--text">Accueil</v-btn>
      <v-btn :to='"/"' class="green withe--text">Blog</v-btn>
      <v-btn :to='"/contact"' class="green withe--text">Contact</v-btn>
      <v-btn :to='"/formulaire"' v-if='status=="Trésorier" || status=="Admin" || status=="Animateur" || status=="Cuistot" || status=="Utilisateur" || status=="Parents"' class="green withe--text">Formulaire</v-btn>
      <v-btn :to='"/gestion"' v-if='status=="Admin"' class="green withe--text">Gestion</v-btn>
      <v-btn :to='"/paiement"' v-if='status=="Trésorier" || status=="Admin"' class="green withe--text">Paiement</v-btn>
      <v-btn :to='"/staff"' v-if='status=="Trésorier" || status=="Admin" || status=="Animateur" || status=="Cuistot"' class="green withe--text">Staff</v-btn>
      <v-spacer></v-spacer>
      <v-btn :to='"/creation"' right v-if='connected==false' class="green withe--text">
        <span>Connexion</span>
      </v-btn>
      <v-btn :to='"/compte"' v-if='connected==true' class="green withe--text">Compte</v-btn>
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

</style>
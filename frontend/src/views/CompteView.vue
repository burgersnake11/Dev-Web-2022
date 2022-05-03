<template>
  <v-app>
    <v-card-text>
      {{ this.content }}
    </v-card-text>
      <v-btn
      class="mr-4"
      @click="testest"
      >
      why not
      </v-btn>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          content: ''
        }
    },
    mounted() {
      let textbienvenue = ("Bonjour parent id " + this.$route.params.id_parent);
      let status = ("Rôle de l'utilisateur : " + this.$route.params.status)
      this.content = textbienvenue + " " + status
    },
    methods : {
        testest () {
          alert(this.content);
        }
    }
}
</script>

<style >
</style>
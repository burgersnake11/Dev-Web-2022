<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Bienvenue {{ nom }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{statut}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn :to='accueil'>Accueil</v-btn>
      <v-btn :to='accueil'>Staff</v-btn>
      <v-btn :to='accueil'>Blog</v-btn>
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
          { title: 'Compte', icon: 'mdi-account-box', to: '/compte'},
          { title: 'Fiches Médicales', icon: 'mdi-image', to:  '/fiches'},
          { title: 'Contact', icon: 'mdi-help-box', to: '/contact' },
          { title: 'Formulaire', icon: 'mdi-help-box', to: '/formulaire' }
        ],
      nom: "Margaret",
      statut: "Connecté(e)",
      accueil: "/",
      profil: "mdi-account-circle"
    }),
  }
</script>
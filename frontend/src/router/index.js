import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FichesView.vue'),
    beforeEnter(to, from, next){
      let status;
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          status = userConnected.status
      } else {
        status = false;
      }
      try {
        if(status=="Animateur" || status=="Cuistot" || status=="Trésorier" || status=="Admin"){
          next()
        } else {
          next({
            name:"home"
          })
        }
      }catch(e){
        next({
          name:"home"
        })
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/creation',
    name: 'creation',
    component: () => import('../views/FormulaireCompte.vue')
  },
  {
    path: '/formulaire',
    name: 'formulaire',
    component: () => import('../views/FormulaireView.vue'),
    beforeEnter(to, from, next){
      let status;
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          status = userConnected.status
      } else {
        status = false;
      }
      try {
        if(status=="Animateur" || status=="Cuistot" || status=="Trésorier" || status=="Admin" || status=="Parents" || status=="Utilisateur"){
          next()
        } else {
          next({
            name:"home"
          })
        }
      }catch(e){
        next({
          name:"home"
        })
      }
    }
  },
  {
    path: '/connection',
    name: 'connection',
    component: () => import('../views/ConnectionView.vue')
  },
  {
    path: '/gestion',
    name: 'gestion',
    component: () => import('../views/GestionCompte.vue'),
    beforeEnter(to, from, next){
      let status;
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          status = userConnected.status
      } else {
        status = false;
      }
      try {
        if(status=="Admin"){
          next()
        } else {
          next({
            name:"home"
          })
        }
      }catch(e){
        next({
          name:"home"
        })
      }
    }
  },
  {
    path: '/paiement',
    name: 'paiement',
    component: () => import('../views/GestionPaiement.vue'),
    beforeEnter(to, from, next){
      let status;
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          status = userConnected.status
      } else {
        status = false;
      }
      try {
        if(status=="Trésorier" || status=="Admin"){
          next()
        } else {
          next({
            name:"home"
          })
        }
      }catch(e){
        next({
          name:"home"
        })
      }
    }
  },
  {
    path: '/compte',
    name: 'compte',
    component: () => import('../views/CompteView.vue'),
    beforeEnter(to, from, next){
      let status;
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          status = userConnected.status
      } else {
        status = false;
      }
      try {
        if(status=="Animateur" || status=="Cuistot" || status=="Trésorier" || status=="Admin" || status=="Parents" || status=="Utilisateur"){
          next()
        } else {
          next({
            name:"home"
          })
        }
      }catch(e){
        next({
          name:"home"
        })
      }
    }
  },
  {
    path: '/staff/:id',
    name: 'stafffiches',
    component: () => import('../views/Fichemedicale.vue'),
    beforeEnter(to, from, next){
      let status;
      let authHeader = axios.defaults.headers.common['Authorization']
      if(authHeader){
        let token = authHeader.split('Bearer ')[1];
        var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          let userConnected = JSON.parse(jsonPayload);
          status = userConnected.status
      } else {
        status = false;
      }
      try {
        if(status=="Animateur" || status=="Cuistot" || status=="Trésorier" || status=="Admin"){
          next()
        } else {
          next({
            name:"home"
          })
        }
      }catch(e){
        next({
          name:"home"
        })
      }
    }    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'



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
    component: () => import(/* webpackChunkName: "about" */ '../views/FichesView.vue')
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
    component: () => import('../views/FormulaireView.vue')
  },
  {
    path: '/connection',
    name: 'connection',
    component: () => import('../views/ConnectionView.vue')
  },
  {
    path: '/gestion',
    name: 'gestion',
    component: () => import('../views/GestionCompte.vue')
  },
  {
    path: '/paiement',
    name: 'paiement',
    component: () => import('../views/GestionPaiement.vue')
  },
  {
    path: '/compte',
    name: 'compte',
    component: () => import('../views/CompteView.vue')
  },
  {
    path: '/staff/:id',
    name: 'stafffiches',
    component: () => import('../views/Fichemedicale.vue')    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

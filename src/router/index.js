import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  { 
    path: '/Categorias/:id',
    name: 'productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/Formulario',
    name: 'formulario',
    component: () => import('../views/Formulario.vue')
  },

  {
    path: '/Registro',
    name: 'registro',
    component: () => import('../views/Registro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

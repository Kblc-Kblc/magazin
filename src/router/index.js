import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: function () {
      return import('../components/catalog/v-catalog.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    component: function () {
      return import('../components/cart/v-cart.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

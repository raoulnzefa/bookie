import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import BookDetails from '../pages/BookDetails.vue'
import BookEdit from '../pages/BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/book/edit/:id?',
    component: BookEdit
  },
  {
    path: '/book/:id',
    component: BookDetails
  },
]

const router = new VueRouter({
  routes
})

export default router

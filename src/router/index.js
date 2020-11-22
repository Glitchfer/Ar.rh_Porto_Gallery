import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Customizer from '../views/experiment/Customizer.vue'
// import Draggable from '../views/experiment/Draggable.vue'
// import Canvas from '../views/experiment/Canvas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/customizer',
  //   name: 'Customizer',
  //   component: Customizer
  // },
  // {
  //   path: '/draggable',
  //   name: 'Draggable',
  //   component: Draggable
  // },
  // {
  //   path: '/canvas',
  //   name: 'Canvas',
  //   component: Canvas
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

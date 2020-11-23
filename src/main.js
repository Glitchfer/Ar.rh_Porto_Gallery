import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueKinesis from 'vue-kinesis'
import {
  BootstrapVue,
  IconsPlugin,
  ToastPlugin,
  CarouselPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueDraggable from 'vue-draggable'

Vue.use(VueKinesis)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToastPlugin)
Vue.use(CarouselPlugin)
Vue.use(VueDraggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

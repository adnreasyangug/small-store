import Vue from 'vue'
import App from './App.vue'
import routes from "../routes";
import store from "../store/store";
import VueRouter from "vue-router";

Vue.config.productionTip = false

Vue.use(VueRouter)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context
  })
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')

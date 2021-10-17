import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import auth from './modules/auth'
import payment from './modules/payment'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    users: users,
    auth: auth,
    payment: payment,
  }
})

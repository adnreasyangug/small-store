<template>
  <section class="home">
    <div v-if="!loader">
      <users :items="list"></users>
    </div>
    <loader v-else></loader>
  </section>
</template>

<script>
import store from "../../store/store"
import Users from "../components/users/Users"
import Loader from "../components/elements/Loader";

export default {
  name: "Home",
  components: {
    Users,
    Loader
  },
  data() {
    return {
      loader: true
    }
  },
  computed: {
    list() {
      return store.state.users.list
    },
    token() {
      return store.state.auth.token
    },
  },
  async beforeCreate() {
    await store.dispatch('users/list', this.token ?? localStorage.getItem('authToken'))
    this.loader = false
  }
}
</script>

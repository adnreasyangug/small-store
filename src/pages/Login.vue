<template>
  <section class="login">
    <b-container class="vh-100">
      <LoginForm/>
    </b-container>
  </section>
</template>

<script>
import store from "../../store/store";
import LoginForm from "../components/auth/LoginForm";

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  created() {
    this.$root.$on('signIn', async (form) => {
      await store.dispatch('auth/signIn', form)
    })
  }
}
</script>

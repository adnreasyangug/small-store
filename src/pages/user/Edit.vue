<template>
  <section class="edit">
    <loader v-if="loader"></loader>
    <div class="edit-form" v-else>
      <user-edit-form
          :phone=user.phone
          :email=user.email
          :last-name=user.lastName
          :first-name=user.firstName
      ></user-edit-form>
    </div>
  </section>
</template>

<script>
import UserEditForm from "../../components/user/edit/UserEditForm";
import Loader from "../../components/elements/Loader";
import store from "../../../store/store";

export default {
  name: 'Edit',
  components: {
    UserEditForm,
    Loader
  },
  data(){
    return {
      loader: true
    }
  },
  computed: {
    user() {
      return store.state.users.user
    },
    token() {
      return store.state.auth.token
    },
  },
  async created(){
    let id = this.$route.params.id;
    await store.dispatch('users/user', {
      token: this.token ?? localStorage.getItem('authToken'),
      id: id
    })
    this.loader = false
    this.$root.$on('editUser', (data) => {
      store.dispatch('users/edit', {
        token: this.token ?? localStorage.getItem('authToken'),
        id: id,
        params: data,
      })
    })
  }
}
</script>

<style scoped>

</style>

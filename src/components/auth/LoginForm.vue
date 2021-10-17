<template>
  <section class="login-form d-flex justify-content-center">
    <b-col cols="10">
      <b-card>
        <b-card-header>
          <h2 class="text-center">Sign In</h2>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="onSubmit">
            <b-form-group
                id="email"
                label="Email address:"
                label-for="email"
                description="We'll never share your email with anyone else."
            >
              <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="password-label" label="Your Password:" label-for="password">
              <b-form-input
                  id="password"
                  type="password"
                  v-model="form.password"
                  placeholder="Enter password"
                  required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="my-3">Sign In</b-button>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </section>
</template>

<script>
export default {
  name: "LoginForm",
  data(){
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit(){
      this.$root.$emit('signIn', this.form)
    }
  }
}
</script>

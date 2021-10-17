<template>
  <section class="user-edit-form-section">
    <b-card>
      <b-card-title>
        <h2 class="text-center">Edit Form</h2>
      </b-card-title>
      <b-card-body>
        <b-form @submit.prevent="ediUserInfo">
          <b-form-group
              id="firstName-label"
              label="First Name:"
              label-for="firstName"
          >
            <b-form-input
                id="firstName"
                v-model="firstName"
                type="text"
                placeholder="Enter First Name"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="lastName-label"
              label="Last Name:"
              label-for="lastName"
          >
            <b-form-input
                id="lastName"
                v-model="lastName"
                type="text"
                placeholder="Enter Last Name"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="phone-label"
              label="Phone:"
              label-for="phone"
          >
            <b-form-input
                id="phone"
                v-model="phone"
                type="text"
                placeholder="Enter Phone"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="email-label"
              label="Email address:"
              label-for="email"
          >
            <b-form-input
                id="email"
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
            ></b-form-input>
          </b-form-group>
          <div class="d-flex justify-content-center">
            <b-button type="submit" variant="success" class="my-4">Save</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'UserEditForm',
  props: {
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    phone: {
      required: true,
      type: String
    },
  },
  methods: {
    ediUserInfo(){
      this.$root.$emit('editUser', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
      })
    }
  }
}
</script>

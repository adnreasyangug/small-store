<template>
  <section class="users">
      <b-table striped hover :items="items" :fields="fields">

      <template #cell(payments)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Show Payments
        </b-button>
      </template>

        <template #cell(edit)="row">
          <b-link :to="{name: 'users.edit', params: {id: row.item.id}}"><b-icon icon="pencil-square"></b-icon> Edit</b-link>
      </template>

    </b-table>

    <b-modal :id="infoModal.id" :title="infoModal.title">
      <div class="form">
        <b-form @submit.prevent="createPayment(infoModal.userId)">
          <b-input class="my-2" required min="1" max="100000" step="0.01" placeholder="Amount" type="number" v-model="paymentForm.amount" name="amount"></b-input>
          <b-form-textarea class="my-2" placeholder="Description" v-model="paymentForm.description" name="description"></b-form-textarea>
          <b-button variant="success" type="submit">Create</b-button>
        </b-form>
      </div>
      <div class="my-4">
        <loader v-if="loader"></loader>
        <div v-else>
          <b-table striped hover :items="infoModal.payments" :fields="paymentFields"></b-table>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>

import store from "../../../store/store";
import Loader from "../elements/Loader";

export default {
  name: "Users",
  components: {
    Loader
  },
  data() {
    return {
      loader: true,
      paymentForm: {
        amount: '',
        description: '',
      },
      fields: [
        'firstName',
        'lastName',
        'email',
        'phone',
        'payments',
        'edit',
      ],
      paymentFields: [
        'amount',
        'description',
        'status',
        'createdAt',
      ],
      infoModal: {
        id: 'info-modal',
        title: '',
        payments: [],
        userId: null
      }
    }
  },
  computed: {
    token() {
      return store.state.auth.token
    },
  },
  methods: {
    async info(item, index, button) {
      await store.dispatch('users/payments', {
        token: this.token ?? localStorage.getItem('authToken'),
        id: item.id
      })

      this.infoModal.title = `${item.firstName} ${item.lastName} payments`
      this.infoModal.payments = store.state.users.payments
      this.infoModal.userId = item.id
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      this.loader = false
    },
    async createPayment(userId) {
      await store.dispatch('payment/create', {
        token: this.token ?? localStorage.getItem('authToken'),
        params: this.paymentForm
      })
      await store.dispatch('users/payments', {
        token: this.token ?? localStorage.getItem('authToken'),
        id: userId
      })
      this.infoModal.payments = store.state.users.payments
    },
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

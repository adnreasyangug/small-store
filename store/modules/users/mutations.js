export default {
  SET_USERS: (state, list) => {
    state.list = list
  },
  SET_PAYMENTS: (state, payments) => {
    state.payments = payments
  },
  GET_USER: (state, user) => {
    state.user = user
  },
  EDIT_USER: (state, user) => {
    state.user = user
  },
}

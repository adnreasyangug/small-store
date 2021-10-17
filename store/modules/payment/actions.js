import axios from 'axios'

export default {
    create: async ({commit}, data) => {
        let payment = await axios.post(
            `${process.env.VUE_APP_API_URL}/payment/make`,
            data.params,
            {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            }
        ).then((response) => {
            return response.data.data
        })

        commit('SET_PAYMENT', payment)
    },
}

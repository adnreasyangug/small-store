import axios from 'axios'

export default {
    list: async ({commit}, token) => {
        const users = await axios.get(`${process.env.VUE_APP_API_URL}/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data.data
        })

        commit('SET_USERS', users)
    },
    payments: async ({commit}, data) => {
        const payments = await axios.get(`${process.env.VUE_APP_API_URL}/users/${data.id}/payments`, {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        }).then((response) => {
            return response.data.data
        })

        commit('SET_PAYMENTS', payments)
    },
    user: async ({commit}, data) => {
        const user = await axios.get(
            `${process.env.VUE_APP_API_URL}/users/${data.id}`,
            {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            }
        ).then((response) => {
            return response.data.data
        })

        commit('GET_USER', user)
    },
    edit: async ({commit}, data) => {
        const user = await axios.put(
            `${process.env.VUE_APP_API_URL}/users/${data.id}`, data.params,
            {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            }
        ).then((response) => {
            return response.data.data
        })

        commit('EDIT_USER', user)
    },
}

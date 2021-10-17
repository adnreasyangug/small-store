import axios from 'axios'

export default {
    signIn: async ({commit}, form) => {
        const token = await axios.post(`${process.env.VUE_APP_API_URL}/auth/sign-in`, form).then((response) => {
            localStorage.setItem('authToken', response.data.data.token)
            return response.data.data.token
        })

        commit('SET_TOKEN', token)
    },
}

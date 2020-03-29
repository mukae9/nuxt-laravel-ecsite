
export const state = () => ({
    user: ''
})

export const mutations = {
    createUser: function(state, userId){
        state.user = userId
    }
}

export const actions = {
    async createUserAction ({commit},userId) {
        const res = await this.$axios.$post('http://localhost/api/register',userId)
        commit("createUser", res.id)
    }
}


export const state = () => ({
    user: ''
})

export const mutations = {
    createUser: function(state, user_name){
        state.user = user_name
    }
}

export const actions = {
    async createUserAction ({commit},user_name) {
        const user = await this.$axios.$post('http://localhost/api/register',user_name)
        commit("createUser", user.name)
    }
}

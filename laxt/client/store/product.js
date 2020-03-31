
export const state = () => ({
    cart: [ ]
})

export const mutations = {
    cartIn: function(state, product){
        state.cart.push(product)
    },
    cartDelete: function(state, id){
        state.cart = state.cart.filter(n => n.id !== id);
    }
}

export const actions = {
    
}

export const getters = {
    totalPrice (state) {
        const total_price = state.cart.reduce((p, x) => p + x.fee, 0)
        return total_price
    }
  }

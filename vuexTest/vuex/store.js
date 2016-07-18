import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count : 0
}

const mutations = {
    INCREMENT(state, number) {
        state.count += number
    },
    DECREMENT(state, number) {
        state.count -= number
    }
}

export default new Vuex.Store({
    state : state,
    mutations : mutations
});

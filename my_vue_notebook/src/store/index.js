import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    totalTime: 0,
    list: [
        // {
        //     name: 'jack',
        //     avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        //     date: '2016-10-10',
        //     totalTime: '6',
        //     comment : 'left 6 hours'
        // }
    ],
}

const getters = { // usage : this.$store.getters.getList
    getList: state => {
        return state.list
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});
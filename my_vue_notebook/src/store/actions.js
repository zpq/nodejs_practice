import * as types from './mutation-types'

//you may add some extra login in this file( exp: asynchronous manipulate)
export default {
    addTotalTime ( {commit}, time) {
        commit(types.ADD_TOTAL_TIME, time)
    },

    decTotalTime ( {commit}, time) {
        commit(types.DEC_TOTAL_TIME, time)
    },

    savePlan( {commit}, plan) {
        commit(types.SAVE_PLAN, plan)
    },

    deletePlan( {commit}, idx) {
        commit(types.DELETE_PLAN, idx)
    }
}
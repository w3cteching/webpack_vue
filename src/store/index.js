import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state
const state = {
    count:0
}

//actions
const actions = {
    increment({ commit },value) {
       // console.log('increment')
        
        //提交给mutations的ADD
        commit('ADD')
    }
}


//mutations
const mutations = {
    ADD(state,value) {
        state.count++;
    }
}

//getters


//modules

export default new Vuex.Store({
    state,
    actions,
    mutations
});



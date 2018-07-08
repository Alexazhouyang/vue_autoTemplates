import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'

const state = {
    count:1
};

export default new Vuex.Store({
    modules:{
        state,
    },
    strict: debug,
});
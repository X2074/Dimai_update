import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user';

const store = createStore({
    state: {
    },
    getters,
    mutations: {
    },
    actions: {
    },
    modules: {
        user
    },
    // devtools: true
});
export default store;

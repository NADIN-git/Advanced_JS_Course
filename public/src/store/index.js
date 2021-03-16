import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: []
    },
    mutations: {
        setData(state, payload) {
            state.data = payload.newData
            state.itensOnPage = Jbject.keys(payload.newData);
        },
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsOnPage;
            return keys.reduce((res, cur) =>
                res + state.data[cur].price, 0);
        }
    },
    actions: {
        requestData({
            commit
        }, page) {
            fetch(`../database/items${page}.json`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', {
                        newData: res
                    });
                })
        }
    },
});
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

console.log("Запустила index.js")

export default new Vuex.Store({
    state: {
        data: {},
        dataout: {},
        itemsOnPage: [],
        itemsInCart: [],
        counter: 0
    },
    mutations: {
        setData(state, payload) {
            state.data = payload.newData;
            state.itemsOnPage = Object.keys(payload.newData);
        },
        outData(state, payload) {
            state.dataout = payload.dobData;
            state.itemsInCart = Object.keys(payload.dobData);
        },
    },
    getters: {
        getData: state => state.data,
        redData: state => state.dataout,
        getItemsOnPage: state => state.itemsOnPage,
        getItemsInCart: state => state.itemsInCart,
        getFullPrice: state => {
            const keys = state.itemsInCart;
            return keys.reduce((res, cur) =>
                res + state.dataout[cur].price, 0);
        },
        getFullCount: state => {
            const keys = state.itemsInCart;
            return keys.reduce((res, cur) =>
                res + 1, 0);
        },
    },

    actions: {
        requestData({
                commit
            },
            page) {
            fetch(`/itemsList/${page}`, {
                    method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', {
                        newData: res
                    });
                });
        },
        requestCart({
                commit
            },
            page) {
            fetch(`/itemsList/${page}`, {
                    method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('outData', {
                        dobData: res
                    });
                });
        },
        addItem({}, data) {
            fetch('/itemslist', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    console.log(res)
                });
        }
    },
});
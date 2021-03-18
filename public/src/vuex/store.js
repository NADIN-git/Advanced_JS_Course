import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        cart: [],
        products: [],
    },
    mutations: {
        // Дмитрий
        setData(state, payload) {
            state.data = payload.newData
            state.itensOnPage = Object.keys(payload.newData);
        },
        // Ю туб
        SET_CART: (state, products) => {
            state.cart.push(products)
        },
        GET_PRODUCTS_TO_STATE(state, products) {
            state.products = products;
        },
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsOnPage;
            return keys.reduce((res, cur) =>
                res + state.data[cur].price, 0);
        },
        PRODUCTS(state) {
            return state.products;
        },
        //PRODUCTS: state => state.products,
        CART(state) {
            return state.cart;
        }
    },
    actions: {
        /*   requestData({
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
           },*/
        requestData({
            commit,
            state
        }, page) {
            fetch(`/itemsList`, {
                    method: "GET",
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', {
                        newData: res
                    });
                })
        }
    }
    /*GET_PRODUCTS_FROM_API({
        commit
    }) {
        return axios('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products: import('axios').AxiosResponse < array > ) => {
                commit("SET_PRODUCTS_TO_STATE", products)
            })
    },
    ADD_TO_CART({
        commit
    }, product) {
        commit('SET_CART', product);
    }*/

});
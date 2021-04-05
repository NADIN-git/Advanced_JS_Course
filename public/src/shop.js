import Vue from 'vue';
import App from './App.vue';

import store from './store/index.js'

console.log("Запустила shop.js")

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,
})
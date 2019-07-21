import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import router from './router/router'

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})
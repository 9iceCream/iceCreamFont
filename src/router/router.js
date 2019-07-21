import VueRouter from "vue-router";

import Account from '../page/Account.vue'
import HomePage from '../page/HomePage.vue'
import Login from '../page/login/Login.vue'
import Register from '../page/login/Register.vue'

var router = new VueRouter({
    routes:[
        {
            path:'/account',
            component:Account,
            children:[
                { path:'login',component:Login },
                { path:'register',component:Register }
            ]
        },
        { path:'/homePage',component:HomePage}
    ]
})
module.exports = router

import VueRouter from "vue-router";

import Home from '../page/Home.vue'
import User from '../page/user/User.vue'
import Login from '../page/user/Login.vue'
import Register from "../page/user/Register.vue";

var router = new VueRouter({
    routes:[
        { path:'/',component:Home},
        {
            path:'/user',
            component: User,
            children:[
                {
                    path:'/user/login',
                    component: Login
                },
                {
                    path:'/user/register',
                    component: Register
                }
            ]
        },
    ]
})
module.exports = router


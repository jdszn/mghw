import VueRouter from 'vue-router';

import first from '../../components/first.vue'
import buy from '../../components/buy.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import me from '../../components/me.vue'
import details from '../../components/details.vue'
import login from '../../components/login.vue'
import help from '../../components/help.vue'

export default new VueRouter({
    routes:[

        {
            path:'/',
            component:first,
            redirect:'/index'
        },
        {
            path:'/index',
            component:index
        },
        {
            path:'/type',
            component:type
        },
        {
            path:'/buy',
            component:buy
        },
        {
            path:'/me',
            component:me
        },
        {
            path:'/details',
            component:details
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/help',
            component:help
        },
        {
            path:'/*',
            redirect:'/index'
        }
    ]
})
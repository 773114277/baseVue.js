import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'

Vue.use(Router)

export default new Router({
    linkActiveClass: '',
    routes: [
        {
            path: '/one',
            name: 'one',
            component: one
        }
    ]
})
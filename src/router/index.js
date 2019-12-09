import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'

Vue.use(Router)

const router = new Router({
    linkActiveClass: '',
    routes: [
        {
            path: '/one',
            name: 'one',
            component: one
        }
    ]
})

/**
 * 全局前置导航守卫 当点击路由之后使滚动条始终保持在顶部
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。
 */
router.beforeEach((to, from, next) => {

    if (typeof document.body.scrollTop !== 'undefined') {
        // chrome
        document.body.scrollTop = 0;
    } else if (typeof document.documentElement.scrollTop !== 'undefined') {
        // firefox
        document.documentElement.scrollTop = 0;
    } else {
        window.pageYOffset = 0;
    }
    next()
});


export default router

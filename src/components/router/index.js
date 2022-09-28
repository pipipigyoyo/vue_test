import vueRouter from 'vue-router'
import About from '../About'
import Home from '../Home'
import Message from '../Message'
import New from '../New'
import Detile from '../Detile'
const router = new vueRouter({
    routes: [
        { path: '/about', component: About, meta: { title: '关于' } },
        {
            path: '/home', component: Home,
            children: [{
                path: 'message', component: Message, children: [{
                    name: 'guangyu', path: 'detile/:id/:title', component: Detile, props($route) {
                        return { id: $route.params.id, title: $route.params.title }
                    }
                }], meta: { isVerification: true, title: '信息' }
            }, {
                path: 'new', component: New, meta: { isVerification: true, title: '新闻' }, beforeEnter: (to, from, next) => {
                    if (to.meta.isVerification) {
                        if (localStorage.getItem('username') !== 'cyan') {
                            alert('无权访问')
                        } else {
                            next()
                        }
                    } else {
                        next()
                    }
                }
            }], meta: { title: '详细' }
        },
    ]
})

/* router.beforeEach((to, from, next) => {
    if (to.meta.isVerification) {
        if (localStorage.getItem('username') !== 'cyan') {
            alert('无权访问')
        } else {
            next()
        }
    } else {
        next()
    }
}) */

router.afterEach((to, from) => {
    document.title = to.meta.title || '主页'
})
export default router

export default {
    mode:'history',
    routes:[
        {
            path:'*',
            component:() => import(/* webpackChunkName: "NotFound" */'./components/NotFound'),
            meta: {
                title: 'Страницы не существует 404'
            }
        },
        {
            path:'/',
            name:'home',
            component:() => import(/* webpackChunkName: "Home" */'./components/Home'),
            meta: {
                title: 'Редакторское бюро dagna.kz'
            }
        },
        {
            path:'/service',
            name:'service',
            component:() => import(/* webpackChunkName: "Service" */'./components/Service'),
            meta: {
                title: 'Сервисы dagna.kz'
            }
        },
        {
            path:'/service/rewrite',
            name:'rewrite',
            component:() => import(/* webpackChunkName: "Rewrite" */'./components/Rewrite'),
            meta: {
                title: 'Рерайт текста онлайн'
            }
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
                // , offset: { x: 0, y: 10 }
            }
        }
    }
}

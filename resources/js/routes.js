
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
                title: 'Игорь Рыбоков "ТОК" arbatbooks.kz'
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

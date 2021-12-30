
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
                title: 'Игорь Рыбаков "ТОК" arbatbooks.kz'
            }
        },
        {
            path:'/oferta',
            name:'oferta',
            component:() => import(/* webpackChunkName: "oferta" */'./components/oferta'),
            meta: {
                title: 'Онлайн оферта | arbatbooks.kz'
            }
        },
        {
            path:'/delivery',
            name:'Delivery',
            component:() => import(/* webpackChunkName: "delivery" */'./components/div'),
            meta: {
                title: 'Доставка и оплата | arbatbooks.kz'
            }
        },
        {
            path:'/success',
            name:'success',
            component:() => import(/* webpackChunkName: "success" */'./components/success'),
            meta: {
                title: 'Ток оплачен | arbatbooks.kz'
            }
        },
        {
            path:'/fail',
            name:'fail',
            component:() => import(/* webpackChunkName: "fail" */'./components/fail'),
            meta: {
                title: 'Ошибка | arbatbooks.kz'
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


import Home from './components/Home'
import Rewrite from './components/Rewrite'
import NotFound from './components/NotFound'
import Service from './components/Service'


export default {
    mode:'history',
    routes:[
        {
            path:'*',
            component:NotFound,
            meta: {
                title: 'Страницы не существует 404'
            }

        },
        {
            path:'/',
            name:'home',
            component:Home,
            meta: {
                title: 'Редакторское бюро dagna.kz'
            }
        },
        {
            path:'/service',
            name:'service',
            component:Service,
            meta: {
                title: 'Сервисы dagna.kz'
            }
        },
        {
            path:'/service/rewrite',
            name:'rewrite',
            component:Rewrite,
            meta: {
                title: 'Рерайт текста онлайн'
            }
        },
    ]
}

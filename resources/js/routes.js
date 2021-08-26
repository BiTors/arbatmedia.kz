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
        },
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/service',
            name:'service',
            component:Service,
        },
        {
            path:'/service/rewrite',
            name:'rewrite',
            component:Rewrite,
        },
    ]
}

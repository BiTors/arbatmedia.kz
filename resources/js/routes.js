import Home from './components/Home'
import Rewrite from './components/Rewrite'
import NotFound from './components/NotFound'
export default {
    mode:'history',
    routes:[
        {
            path:'*',
            component:NotFound,
        },
        {
            path:'/',
            component:Home,
        },
        {
            path:'/rewrite',
            component:Rewrite,
        },
    ]
}

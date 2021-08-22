import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                accent: "#8c9eff",
                error: "#FB8C00",
                info: "#2196F3",
                primary: "#fe554e",
                secondary: "#fe554e",
                success: "#fe554e",
                warning: "#FB8C00",
                background: "#fe554e",
                fr: "#fe554e",
                hot: "#d43c3c"
            },
        },
    },
    icons: {
        iconfont: 'fa4',
    },
})
    //const opts = new Vuetify({})
export default vuetify

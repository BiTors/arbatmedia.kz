/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';

Vue.use(Vuex);


import Store from "./store/index";
const store = new Vuex.Store(
    Store
);


import vuetify from './plugins/vuetify'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('c-menu', require('./components/Menu.vue').default);
Vue.component('c-home', require('./components/Home.vue').default);
Vue.component('c-rewrite', require('./components/Rewrite.vue').default);
Vue.component('v-header', require('./components/v-header.vue').default);
Vue.component('a-section', require('./components/a-section.vue').default);
Vue.component('b-section', require('./components/b-section.vue').default);
Vue.component('c-section', require('./components/c-section.vue').default);
Vue.component('d-section', require('./components/d-section.vue').default);
Vue.component('e-section', require('./components/e-section.vue').default);
Vue.component('steps', require('./components/steps.vue').default);
Vue.component('f-section', require('./components/f-section.vue').default);
Vue.component('portfolio', require('./components/portfolio.vue').default);
Vue.component('contacts', require('./components/contacts.vue').default);
Vue.component('footer-c', require('./components/footer-c.vue').default);
Vue.component('c-partner', require('./components/partner.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const Router = new VueRouter(routes)
Router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    next()
});

const app = new Vue({
    el: '#app',
    router: Router,
    store,
    vuetify,


});

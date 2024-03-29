/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta'
Vue.use(VueRouter);
import routes from './routes';
Vue.use(Vuex);
Vue.use(VueMeta)
import Store from "./store/index";
const store = new Vuex.Store(
    Store
);

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)


import vuetify from './plugins/vuetify'
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
import VueGtag from 'vue-gtag-conversion';

Vue.use(VueGtag, {
    id: 'AW-980326951', // Your Adwords ID
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: process.env.NODE_ENV !== 'production' (optional)
    debug: true, // Whether or not display console log debugs (optional)
});
Vue.component('c_menu', () => import('./components/Menu.vue'));
Vue.component('sec_e', () => import('./components/e-section.vue'));
Vue.component('steps', () => import('./components/steps.vue'));
Vue.component('footer_c', () => import('./components/footer-c.vue'));



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

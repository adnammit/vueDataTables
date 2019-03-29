import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import './assets/reset.css'
import './assets/main.css'

import DessertReport from './components/DessertReport'
import WeatherReport from './components/WeatherReport'
import NobelReport from './components/NobelReport'


Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // { path: '/', component: Home },
        // { path: '/login', component: Login },
        { path: '/weather-report', component: WeatherReport, name: 'weather-report' },
        { path: '/nobel-report', component: NobelReport, name: 'nobel-report' },
        { path: '/dessert-report', component: DessertReport, name: 'dessert-report' }
    ]
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

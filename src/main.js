import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './assets/reset.css'
import './assets/main.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

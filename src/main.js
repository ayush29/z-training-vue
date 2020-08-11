import Vue from 'vue'
import App from './App.vue'
// import VueSession from 'vue-session'

Vue.config.productionTip = false

// var options = {
//     persist: true
// }

// Vue.use(VueSession,options)

new Vue({
  render: h => h(App),
}).$mount('#app')

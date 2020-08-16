import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Resthome from './components/onlineOrder/RestHome.vue'
import Main from './components/main/Main.vue'
import Cart from './components/onlineOrder/Cart.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Resthome },
  { path: "/restaurant/:rid", component: Main },
  { path: "/mycart/:uid", component: Cart },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

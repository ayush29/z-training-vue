import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Resthome from './components/onlineOrder/RestHome.vue'
import Main from './components/main/Main.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Resthome },
  {
    path: "/restaurant/:rid",
    component: Main,
    props: (route) => {
      const rid = Number.parseInt(route.params.rid, 10);
      if (Number.isNaN(rid)) {
        return 0;
      }
      return { rid };
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

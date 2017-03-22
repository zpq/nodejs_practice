// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store/index.js'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/time-entries', component: TimeEntries, 
    children: [
      { path: 'log-time', component: resolve => require(['./components/LogTime.vue'], resolve) }
    ]
  },
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  ...App
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import Logger from './plugins/Logger'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Logger, {loggin: true})
Vue.component('app', App)
/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
*/

const routes = [
  {path: '/', component: LoginPage, name: 'home'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: {requiresAuth: true}},
  {path: '/chat', component: ChatPage, name: 'chat', meta: {requiresAuth: true}}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 401) {
      console.log('Need to login again')
    }
  })
})

new Vue({
  router, store
}).$mount('#app')

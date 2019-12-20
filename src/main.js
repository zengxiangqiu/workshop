// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import VueResource from 'vue-resource'

import App from './App'
import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

// import some global styles
import './styles/style.scss'

Vue.use(VueRouter)
Vue.use(VueResource)


// set the API root so we can use relative url's in our actions.
Vue.http.options.root = 'http://localhost:3000'

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new*/
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

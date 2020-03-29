import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fc2900d = () => interopDefault(import('../client/pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _05f7cda8 = () => interopDefault(import('../client/pages/link01.vue' /* webpackChunkName: "pages/link01" */))
const _0605e529 = () => interopDefault(import('../client/pages/link02.vue' /* webpackChunkName: "pages/link02" */))
const _0613fcaa = () => interopDefault(import('../client/pages/link03.vue' /* webpackChunkName: "pages/link03" */))
const _0622142b = () => interopDefault(import('../client/pages/link04.vue' /* webpackChunkName: "pages/link04" */))
const _58031dcc = () => interopDefault(import('../client/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _340a84a9 = () => interopDefault(import('../client/pages/product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _5e0cd0e0 = () => interopDefault(import('../client/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _49ae2208 = () => interopDefault(import('../client/pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _e3490a96 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _2fc2900d,
    name: "cart"
  }, {
    path: "/link01",
    component: _05f7cda8,
    name: "link01"
  }, {
    path: "/link02",
    component: _0605e529,
    name: "link02"
  }, {
    path: "/link03",
    component: _0613fcaa,
    name: "link03"
  }, {
    path: "/link04",
    component: _0622142b,
    name: "link04"
  }, {
    path: "/login",
    component: _58031dcc,
    name: "login"
  }, {
    path: "/product-list",
    component: _340a84a9,
    name: "product-list"
  }, {
    path: "/register",
    component: _5e0cd0e0,
    name: "register"
  }, {
    path: "/products/:id?",
    component: _49ae2208,
    name: "products-id"
  }, {
    path: "/",
    component: _e3490a96,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

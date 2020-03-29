import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fc2900d = () => interopDefault(import('../client/pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _58031dcc = () => interopDefault(import('../client/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _340a84a9 = () => interopDefault(import('../client/pages/product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _5e0cd0e0 = () => interopDefault(import('../client/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _02422a74 = () => interopDefault(import('../client/pages/categories/_id.vue' /* webpackChunkName: "pages/categories/_id" */))
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
    path: "/categories/:id?",
    component: _02422a74,
    name: "categories-id"
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

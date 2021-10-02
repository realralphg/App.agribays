import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store}) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // GOOD
// Router.beforeEach((to, from, next) => {
//   let loggedIn = store.getters['auth/isLoggedIn']
//   if (to.name !== 'login' && !loggedIn) next({ name: 'login' })
//   else next()
// })

Router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token')
  if(to.matched.some(record => record.meta.requireAtuh) && !loggedIn) {
    next({ name: 'login'})
  } else {
    next ()
  }
})

  return Router
}

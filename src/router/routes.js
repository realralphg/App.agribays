import { loggedIn } from 'src/store/auth/getters'
import router from '.'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'login', component: () => import('pages/Index.vue') },
      { path: 'register', name:'register', component: () => import('pages/Index.vue') },
      { path: '/dashboard', name:'home', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/wallet', name:'wallet', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/transactions', name:'transactions', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/account', name:'account', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/account/edit', name:'edit', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/profile', name:'profile', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/store', name:'store', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/savings', name:'savings', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/deposit/:investmentId', name:'deposit', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/food-bag', name:'food', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/new-saving', name:'newSaving', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/allsavings', name:'allsavings', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/alltransactions', name:'alltransactions', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/duesavings', name:'duesavings', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },
      { path: '/users', name:'users', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true} },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

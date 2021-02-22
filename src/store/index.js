import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
      Auth
    },
  })



  // export const store = new Vuex.Store({
  //   modules: {
  //     aisle_1
  //   },

  // })




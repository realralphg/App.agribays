import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${
    localStorage.getItem('user-token')
}`

export function register ({ commit }, credentials) {
    return axios
        .post('https://agrobay-api.herokuapp.com/auth/register', credentials)
        .then(({data}) => {
            commit('SET_USER_DATA', data.data)
            console.log('user data is : ', data)
        })
}

export function login ({ commit }, credentials) {
    return axios
        .post('https://agrobay-api.herokuapp.com/auth/login', credentials)
        .then(({data}) => {
            commit('SET_USER_DATA', data.data)
            console.log('user data is : ', data)
        })
}

export function profile ({ commit }, credentials) {
    return axios
        .get('https://agrobay-api.herokuapp.com/auth/profile', credentials)
        .then(({data}) => {
            commit('GET_USER_PROFILE', data.data)
            console.log('profile data is : ', data)
        })
}

export function subscription ({ commit }, credentials) {
    return axios
        .get('https://agrobay-api.herokuapp.com/subscription', credentials)
        .then(({data}) => {
            commit('GET_USER_SUBSCRIPTION', data.data)
            console.log('subscription data is : ', data)
        })
}

export function address ({ commit }, credentials) {
    return axios
        .get('https://agrobay-api.herokuapp.com/address', credentials)
        .then(({data}) => {
            commit('GET_USER_ADDRESS', data.data)
            console.log('address data is : ', data)
        })
}

export async function plans ({ commit }){
    axios
      .get('https://agrobay-api.herokuapp.com/plan')
        .then(response => {
          commit('GET_PLANS', response.data.data)
          console.log('plan data is : ', response.data.data)
        })
      .catch(err=>{
        console.log('err: ', err)
      })
  }

  export async function transactions ({ commit }){
    axios
      .get('https://agrobay-api.herokuapp.com/transaction')
        .then(response => {
          commit('GET_TRANSACTIONS', response.data.data)
          console.log('transaction data is : ', response.data.data)
        })
      .catch(err=>{
        console.log('err: ', err)
      })
  }

  export function transaction ({ commit }, credentials) {
    return axios
        .post('https://agrobay-api.herokuapp.com/transaction', credentials)
        .then(({data}) => {
            commit('SET_TRANSACTION', data.data)
            console.log('transaction data is : ', data)
        })
}

  export async function wallet ({ commit }){
    axios
      .get('https://agrobay-api.herokuapp.com/wallet')
        .then(response => {
          commit('GET_WALLET', response.data.data)
          console.log('wallet data is : ', response.data.data)
        })
      .catch(err=>{
        console.log('err: ', err)
      })
  }

  export async function products ({ commit }){
    axios
      .get('https://agrobay-api.herokuapp.com/product')
        .then(response => {
          commit('GET_PRODUCTS', response.data.data)
          console.log('product data is : ', response.data.data)
        })
      .catch(err=>{
        console.log('err: ', err)
      })
  }

export function logout ({ commit }) {
    localStorage.removeItem('user-token')
    commit('CLEAR_USER_DATA')
}

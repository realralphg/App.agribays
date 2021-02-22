import Axios from "axios"

export function SET_USER_DATA ( state, userData) {
    state.user = userData
    localStorage.setItem('user-token', userData.token)
    Axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
    }`
}

export function GET_USER_PROFILE ( state, profile) {
    state.profile = profile
}

export function GET_USER_SUBSCRIPTION ( state, subscription) {
    state.subscription = subscription
}

export function GET_USER_ADDRESS ( state, address) {
    state.address = address
}

export function GET_PLANS ( state, plans) {
    state.plans = plans
}

export function GET_TRANSACTIONS ( state, transactions) {
    state.transactions = transactions
}

export function GET_PRODUCTS ( state, products) {
    state.products = products
}

export function GET_WALLET ( state, wallet) {
    state.wallet = wallet
}



export function CLEAR_USER_DATA () {
    location.reload()
}

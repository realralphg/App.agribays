export function loggedIn ( state ) {
    return !!state.token
}

export function profile (state) { return state.profile }

export function subscription (state) { return state.subscription }

export function address (state) { return state.address }

export function plans (state) { return state.plans }

export function wallet (state) { return state.wallet }

export function transactions (state) { return state.transactions }

export function products (state) { return state.products}

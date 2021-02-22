<template>
  <div>
      <component :is="componentId"></component>
  </div>
</template>

<script>
import account from '../components/dash/account'
import edit from '../components/dash/edit'
import overview from '../components/dash/overview'
import profile from '../components/dash/profile'
import savings from '../components/dash/savings'
import food from '../components/dash/food'
import store from '../components/dash/store'
import transactions from '../components/dash/transactions'
import wallet from '../components/dash/wallet'
import home from '../components/dash/home'
export default {
components: {
    home,
    savings,
    wallet,
    transactions,
    account,
    store,
    profile,
    food,
    edit
},
computed: {
    componentId() {
        return this.$route.name
    },
  },
}
</script>

<style>

</style>
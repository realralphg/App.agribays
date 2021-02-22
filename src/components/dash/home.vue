<template>
  <div class="q-pa-md">
      <div class="text-h5 text-bold">Overview</div>
      <overview />
      <div class="q-mt-xl">
        <div>
          <chart  />
        </div>
        <!-- <Transactions /> -->
      </div>
  </div>
</template>

<script>
import overview from 'components/dash/overview'
import chart from 'components/charts/chart'
// import Transactions from 'components/common/transactions.vue'
export default {
    components: {
        overview,
        chart
        // Transactions,
    },
}
</script>

<style scoped>
</style>
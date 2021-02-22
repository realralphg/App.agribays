<template>
  <div class="q-pa-md">
      <div class="text-h5 text-bold">Wallet</div>
      <overview />
      <div class="q-mt-xl">
        <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                <q-card flat bordered class="q-pa-lg text-center">
                    <div class="text-h5 text-bold">Transacstions</div>
                    <div class="text-h4 text-weight-light q-py-md">8</div>
                    <q-btn unelevated color="primary" class="full-width" label="View All" />
                </q-card>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                <q-card flat bordered class="q-pa-lg text-center">
                    <div class="text-h5 text-bold">Current Plan</div>
                    <div class="text-h4 text-weight-light q-py-md">500</div>
                    <q-btn unelevated color="primary" class="full-width" label="Change Plan" />
                </q-card>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                <q-card flat bordered class="q-pa-lg text-center">
                    <div class="text-h5 text-bold">Wallet</div>
                    <div class="text-h4 text-weight-light q-py-md">NGN 98,000</div>
                    <q-btn unelevated color="primary" class="full-width" label="Fund Wallet" />
                </q-card>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import overview from 'components/dash/overview'
export default {
    components: {
        overview
    }
}
</script>

<style>

</style>
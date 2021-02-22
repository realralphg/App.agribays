<template>
  <div>
    <section class="row">
        <form class="col-md-8 col-sm-12 col-xs-12">
            <div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="address1" label="Address 1" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="address2" label="Address 2" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="state" label="State" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="country" label="Country" />
                    </div>
                </div>
                <div class="q-pa-md">
                    <q-btn unelevated color="primary" label="Update Address" no-caps />
                </div>
            </div>
        </form>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div>
    <section class="row">
        <form class="col-md-8 col-sm-12 col-xs-12">
            <div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="fname" label="First Name" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="lname" label="Last Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="email" label="Email" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="phone" label="Phone Number" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="email" label="Plan" placeholder="500" />
                    </div>
                </div>
                <div class="q-pa-md">
                    <q-btn unelevated color="primary" label="Update Profile" no-caps />
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
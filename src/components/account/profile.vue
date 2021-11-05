<template>
  <div>
    <section class="row">
        <form class="col-md-8 col-sm-12 col-xs-12">
            <div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" disable v-model="userData.fname" label="First Name" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" disable v-model="userData.lname" label="Last Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined disable dense bg-color="white" v-model="userData.email" label="Email" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <q-input outlined dense bg-color="white" v-model="userData.phone" label="Phone Number" />
                    </div>
                </div>
             
                <div class="q-pa-md" v-if="!loading">
                    <q-btn @click="update()" unelevated color="primary" label="Update Profile" no-caps />
                </div>
                <span v-else>  <q-circular-progress
      indeterminate
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="green"
      class="q-ma-md"
    /> Please Wait...  </span>
            </div>
        </form>
    </section>
  </div>
</template>

<script>
import {Notify} from 'quasar'

export default {
    data(){
        return {
           userData: {},
           loading:false
        }
    },

    methods: {
        update(){
             this.loading = true
             this.$store.dispatch('updateUser',this.userData).then(user=>{
                Notify.create({
                    spinner: true,
                    message: 'Update successfull...',
                    timeout: 2000,
                    type:'positive'
                })
                this.loading = false
                }).catch(error=>{  
                    console.log(error.response)
                    if (error.response && error.response.status === 400) {
                        this.errors = error.response.data.message[0].messages;
                    }

                // alert(this.errors[0].message)
                Notify.create({message:this.errors[0].message,type:'negative',position:'top'})

                this.loading = false
                })
        }
    },

    mounted() {
        this.userData = this.$store.getters.user
    }


}
</script>

<style>

</style>
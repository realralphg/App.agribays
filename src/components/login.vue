<template>
  <div style="width: 100%; height: 100vh;">
      <section class="row items-center flex-center flex full-height full-width row">
          <q-card flat tile class="col-md-5 bg-transparent q-pa-xl">
            <q-card-section>
                <div>
                    <form @submit.prevent="login">
                        <div class="text-h4 text-primary text-center text-bold">Welcome Back</div>
                        <q-input class="q-mt-lg" v-model="userData.identifier">
                            <template v-slot:prepend>
                            <q-icon name="person" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-lg" v-model="userData.password" :type="isPwd ? 'password' : 'text'">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                       
                        <div class="q-mt-xl">
                            <div v-if="!loading">
                                <q-btn  class="q-px-lg" @click="login()" unelevated label="Login" type="submit" color="primary" no-caps/>
                            </div>
                           <span v-else>  <q-circular-progress
      indeterminate
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="green"
      class="q-ma-md"
    /> Please Wait...  </span>
                            <div class="text-body1 q-mt-sm"><small>Don't have an account? <span class="text-primary text-bold cursor-pointer" @click="$router.push({ name: 'register'})">Register</span></small></div>
                            
                        </div>
                        
                    </form>
                </div>
            </q-card-section>
            </q-card>
      </section>
  </div>
</template>

<script>
import {Notify} from 'quasar'

export default {
    data () { 
        return {
            isPwd: true,
            accept: false,
            loading: false,
            userData: {
                identifier: '',
                password: ''
            }
        }
    },

     methods: {
        // loginUser () {
        //     this.$store.dispatch('Auth/login', this.form)
        //     .then(() => {
        //         this.$router.push({ name: 'home'})
        //         this.$q.notify({
        //         message: 'Login was successful!',
        //         color: 'green'
        //         })
        //     })
        //     .catch(error => {
        //         if (error.response) {
        //         this.$q.notify({message: error.response.data.message, color: 'orange'})
        //         }
        //     })
        // },
        login(){
            console.log(this.userData)
            this.loading = true;
            if(this.userData.identifier == '' || this.userData.password == ''){
              Notify.create({message:"Enter Username and Password",type:'negative',position:'top'})
                          this.loading = false;
            }
            else{
                this.$store.dispatch('login',this.userData).then(user=>{
                Notify.create({
                    spinner: true,
                    message: 'Login successfull...',
                    timeout: 2000,
                    type:'positive'
                })
                //check role before redirecting
                    this.$router.push("/dashboard")
               
                
                }).catch(error=>{  
                    console.log(error.response)
                    if (error.response && error.response.status === 400) {
                        this.errors = error.response.data.message[0].messages;
                    }

                // alert(this.errors[0].message)
                Notify.create({message:this.errors[0].message,type:'negative',position:'top'})
                                          this.loading = false;


                })
            }
            
        }
    }
}
</script>

<style>

</style>
<template>
  <div style="width: 100%; height: 100vh;">
      <section class="row items-center flex-center flex full-height full-width row">
          <q-card flat tile bordered class="bg-accent col-md-5 q-px-xl q-py-lg">
            <q-card-section>
                <div>
                    <form>

                        <div class="text-h4 text-primary text-center text-bold">Create an account</div>
                        <q-input class="q-mt-sm" placeholder="Full Name" v-model="userData.username" >
                            <template v-slot:prepend>
                            <q-icon name="person" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Email" v-model="userData.email">
                            <template v-slot:prepend>
                            <q-icon name="email" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Create Password" v-model="userData.password">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                         <q-input class="q-mt-sm" placeholder="Comfirm Password" v-model="userData.passwordComfirmation">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="State" v-model="userData.state">
                            <template v-slot:prepend>
                            <q-icon name="place" />
                            </template>
                        </q-input>

                         <q-input class="q-mt-sm" placeholder="Town/City" v-model="userData.town">
                            <template v-slot:prepend>
                            <q-icon name="place" />
                            </template>
                        </q-input>

                       <q-input class="q-mt-sm" placeholder="Address" v-model="userData.address">
                            <template v-slot:prepend>
                            <q-icon name="place" />
                            </template>
                        </q-input>
                        
                        <div class="q-mt-sm">
                            <div>
                                <q-btn label="Register" @click="register()" no-caps class="q-px-lg" unelevated type="submit" color="primary"/>
                            </div>
                          <div class="text-body1 q-mt-sm"><small>Have an account? <span class="text-primary text-bold cursor-pointer" @click="$router.push({ name: 'login'})">Login</span></small></div>

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
            errors: [],
            accept: false,
            model: '',
            options: [
                'Basic', 'Standard', 'Premium'
            ],
    
            userData: { 
                username: null,
                email: null,
                password: null,
                passwordComfirmation: null,
                city: null 
            }
            }
    }, 
    methods: {
        register(){
            console.log(this.userData)
            if(this.userData.password != this.userData.passwordComfirmation){
              Notify.create({message:"Passwords Do not Match",type:'negative',position:'top'})

            }
            else{
                this.$store.dispatch('register',this.userData).then(user=>{
                Notify.create({
                    spinner: true,
                    message: 'Registration successfull...',
                    timeout: 2000,
                    type:'positive'
                })
                this.$router.push("/dashboard")
                }).catch(error=>{  
                    console.log(error.response)
                    if (error.response && error.response.status === 400) {
                        this.errors = error.response.data.message[0].messages;
                    }

                // alert(this.errors[0].message)
                Notify.create({message:this.errors[0].message,type:'negative',position:'top'})


                })
            }
            
        },

         
    },
}
</script>

<style>

</style>
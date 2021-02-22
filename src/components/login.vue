<template>
  <div style="width: 100%; height: 100vh;">
      <section class="row items-center flex-center flex full-height full-width row">
          <q-card flat tile class="col-md-5 bg-transparent q-pa-xl">
            <q-card-section>
                <div>
                    <form @submit.prevent="loginUser">
                        <div class="text-h4 text-primary text-center text-bold">Welcome Back</div>
                        <q-input class="q-mt-lg" v-model="form.email">
                            <template v-slot:prepend>
                            <q-icon name="person" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-lg" v-model="form.password" :type="isPwd ? 'password' : 'text'">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <div class="q-mt-xl">
                            <div>
                                <q-btn class="q-px-lg" unelevated label="Login" type="submit" color="primary" no-caps/>
                            </div>
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
export default {
    data () {
        return {
            isPwd: true,
            accept: false,
            form: {
                email: '',
                password: ''
            }
        }
    },

     methods: {
        loginUser () {
            this.$store.dispatch('Auth/login', this.form)
            .then(() => {
                this.$router.push({ name: 'home'})
                this.$q.notify({
                message: 'Login was successful!',
                color: 'green'
                })
            })
            .catch(error => {
                if (error.response) {
                this.$q.notify({message: error.response.data.message, color: 'orange'})
                }
            })
        }
    }
}
</script>

<style>

</style>
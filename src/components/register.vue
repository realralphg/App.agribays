<template>
  <div style="width: 100%; height: 100vh;">
      <section class="row items-center flex-center flex full-height full-width row">
          <q-card flat tile class="bg-transparent col-md-5 q-px-xl q-py-lg">
            <q-card-section>
                <div>
                    <form @submit.prevent="register">
                        <div class="text-h4 text-primary text-center text-bold">Create an account</div>
                        <q-input class="q-mt-sm" placeholder="First Name" v-model="form.first_name">
                            <template v-slot:prepend>
                            <q-icon name="person" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Last Name" v-model="form.last_name">
                            <template v-slot:prepend>
                            <q-icon name="person" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Email" v-model="form.email">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Phone Number" v-model="form.phone_number">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-input v-model="form.password" placeholder="Password" :type="isPwd ? 'password' : 'text'">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                            <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="City" v-model="form.country">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-select class="q-mt-sm" v-model="form.label" :options="options">
                            <template v-slot:prepend>
                            <q-icon name="event" />
                            </template>
                        </q-select>
                        <div class="q-mt-sm">
                            <div>
                                <q-btn label="Register" no-caps class="q-px-lg" unelevated type="submit" color="primary"/>
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
export default {
    data () {
        return {
            isPwd: true,
            accept: false,
            model: '',
            options: [
                300, 500, 1000
            ],
            form: {
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                country: '',
                label: 300
            }
        }
    },

    methods: {
        register () {
            this.$store.dispatch('Auth/register', this.form)
            .then(() => {
                this.$router.push({ name: 'home'})
                this.$q.notify({
                message: 'Registration was successful!',
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
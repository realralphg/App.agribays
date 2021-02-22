<template>
  <div>
      <div>
            <div>
                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="account_balance_wallet" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Wallet</div>
                                    <div class="text-body1 text-light" v-if="wallet">{{ wallet.balance }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="topic" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Plan</div>
                                    <div class="text-body1 text-light" v-if="subscription">{{ subscription[0].plan.name }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="today" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Due Date</div>
                                    <div class="text-body1 text-light" v-if="subscription">{{ myDate }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            myDate: ''
        }
    },
    computed: {
        ...mapGetters({
            subscription: 'Auth/subscription',
            wallet: 'Auth/wallet'
        })
    },

    methods: {
        calcDate () {
            let findDate = this.subscription[0].endDate
            let dateFinder = new Date (findDate).toDateString()
            let dayAt = dateFinder.split(" ")[2]
            let monthAt = dateFinder.split(" ")[1]
            this.myDate = dayAt + " " + monthAt

        }
    },

    mounted () {
        this.$store.dispatch('Auth/subscription')
        this.$store.dispatch('Auth/wallet')
        this.calcDate()
    }
}
</script>

<style>

</style>
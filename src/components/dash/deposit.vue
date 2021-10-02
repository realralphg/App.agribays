<template>
  <div class="q-pa-md">
      <div class="text-h5 text-bold">Deposit to Savings</div>
      <div class="q-mt-xl">
        <div class="row">
            <div class="col-md-8 col-sm-12 col-xs-12">
                <div class="q-pa-md">
                    <div class="q-pb-sm">
                    <!-- Model: {{ days }} -->
                    </div>

                    <q-date flat v-model="transact.range" range multiple :events="events" event-color="primary"  style="width: 100%;" />
                </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
                <div>
                    <div class="q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg text-center">
                            <div class="text-h5 text-bold">Days Paid</div>
                            <div class="text-h5 text-weight-light q-py-md">{{ daysPaid }} days @ <span>&#8358;</span>
{{ investment.paidAmount | toCurrency }}</div>
                            <div class="text-h5 text-bold">Days Remaining</div>
                            <div class="text-h5 text-weight-light q-py-md">{{ daysRemaining }} days @ <span>&#8358;</span>
{{ investment.totalAmount - investment.paidAmount | toCurrency  }}</div>
                            <div class="text-h5 text-bold">Days selected</div>
                            <div class="text-h5 text-weight-light q-py-md">{{ transact.paid_days }}</div>
                            <div class="text-h5 text-weight-light q-py-md">Amount:  <span>&#8358;</span> {{ transact.amount | toCurrency }}</div>
                            <!-- <q-btn unelevated color="primary" @click="fund" class="full-width" label="Fund Wallet" no-caps/> -->
                            <paystack
                                :amount="this.transact.amount * 100"
                                :email="user.email"
                                :metadata="metadata"
                                paystackkey="pk_test_b9f4ee6624ca4faa7869d5bf20930f48c0322e67"
                                :reference="reference"
                                :callback="fund"
                                :close="close"
                                class="payerStack bg-primary q-px-lg q-py-sm text-white"
                            >
                                Deposit
                            </paystack>
                        </q-card>
                    </div>
                    <div class="q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg text-center" v-if="showBag">
                            <!-- <div class="text-h5 text-bold">Savings</div>
                            <div class="text-h3 text-weight-light q-py-md">${{ savings }}</div> -->
                            <q-btn unelevated color="primary"  class="full-width" :to="{name: 'food'}" label="Food Bag" no-caps />
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { date } from 'quasar' 
import paystack from 'vue-paystack'
export default {
    components: {
        paystack
    },
    data () {
        return {
            amount: null,
            full_name: null,
            email:null,
            showBag: false,
            investment: {},
            metadata: {
                userId: '',
                investmentId: '',
                type: "Savings Deposit",
                newPaidAmount: null,
                newRemainingAmount: null
            },
            daysPaid: 0,
            daysRemaining: 0,
            transact: {
            amount: 0,
            description: "string",
            subscriptionId: 0,
            range: [],
            paid_days: 0
            },
            dates: [
                {},
            ],
            user: {},
            events: [],
            savings: 5000,
            plan: 500,
            days: 1,
            profile: {
                email: "ayuba@gmail.com"
            }
        }
    },

    computed: {
       
        reference() {
            let text = "";
            let possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
            }
    },

    methods: {
        processPayment: () => {
        alert("Payment recieved")
        },
        close: () => {
        console.log("You closed checkout page")
        },
        setDate () {
            let newDate = new Date()
            return newDate
        },

        // save () {
        //     if (this.wallet >= this.plan) {
        //         this.wallet = this.wallet - this.plan
        //         this.savings = this.savings + this.plan
        //     } else {
        //         this.wallet
        //         this.savings
        //     }
        //     let timeStamp = Date.now()
        //     let formattedString = date.formatDate(timeStamp, 'YYYY/MM/DD')
        //     this.events.push(formattedString)
        // },

        // savedDate () {
        //     let timeStamp = Date.now()
        //     let formattedString = date.formatDate(timeStamp, 'YYYY/MM/DD')
        //     // alert(formattedString)
        //     return formattedString
        // },

         render () {
            // const days = this.dates.map(date => (
            // { numberOfDays: (Number(date.to.split('/')[2]) - Number(date.from.split('/')[2])) + 1 }
            // )).reduce((acc, currentValue) => acc.numberOfDays + currentValue.numberOfDays)

            // console.log(days)
            // return days
            if (this.transact.range.length > 0) {          
            let total = 0
            this.transact.range.forEach(date => {
            total += (date.to.split('/')[2] - date.from.split('/')[2]) + 1
            })
            return total
            }
            return 0
        },

        fund () {
            // let plankor = this.plans.find(x => x.id === this.transact.subscriptionId)
            // let plan = plankor.amount
            this.transact.subscriptionId = this.subscription[0].id
            this.$store.dispatch('Auth/transaction', this.transact)
            .then(() => {
                this.$q.notify({
                message: 'Payment was successful!',
                color: 'green'
            })
            })
            .catch(error => {
                if (error.response) {
                this.$q.notify({message: error.response.data.message, color: 'orange'})
                }
            })
        },

        calcDate () {
            const today = new Date()
            const endDate = this.subscription[0].endDate
            if (today == endDate) {
                this.showBag = true
            }
        }
    },

    watch: {
        'transact.range'(newValue, oldValue) {
            // let plankor = this.plans.filter(x => x.id == this.transact.subscriptionId)
            // let plan = plankor.amount
            this.transact.paid_days = this.render()
            this.transact.amount = this.investment.plan.unitAmount * this.transact.paid_days
            this.metadata.newPaidAmount = this.investment.paidAmount + this.transact.amount
            this.metadata.newRemainingAmount = this.investment.remainingAmount - this.transact.amount
        },
    },

    mounted () {
        // this.$store.dispatch('Auth/plans')
        // this.$store.dispatch('Auth/subscription')
        // this.transact.paid_days = this.render()
        console.log(this.$route.params.investmentId)
     this.$store.dispatch("getInvestment",this.$route.params.investmentId).then((investment)=>{
         this.investment = investment
         console.log("Investments>>>",this.investment)
         if(!investment.paidAmount){
             investment.paidAmount = 0
         }
        
         this.daysPaid = investment.paidAmount/investment.plan.unitAmount
         this.daysRemaining = 30 - this.daysPaid

         this.metadata.investmentId = this.investment.id
         this.metadata.userId = this.investment.user.id
         this.user = investment.user

      })
           
    }

}
</script>

<style scoped>
.payerStack {
    border: none;
    border-radius: 5px;
}
</style>
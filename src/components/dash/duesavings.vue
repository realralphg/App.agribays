<template>
  <div class="q-pa-md">
      <div class="text-h5 text-bold">Due Savings</div>
       <Savings />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { date } from 'quasar' 
import paystack from 'vue-paystack'
import Savings from 'src/components/common/duesavingstable.vue'
export default {
    components: {
        Savings,
    },
    data () {
        return {
            amount: null,
            full_name: null,
            email:null,
            showBag: false,

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
            this.transact.amount = this.plans[0].amount * this.transact.paid_days
        },
    },

    mounted () {
        // this.$store.dispatch('Auth/profile')
        // this.$store.dispatch('Auth/plans')
        // this.$store.dispatch('Auth/subscription')
        // this.transact.paid_days = this.render()

    }

}
</script>

<style scoped>
.payerStack {
    border: none;
    border-radius: 5px;
}
</style>
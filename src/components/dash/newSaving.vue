<template>
  <div class="q-pa-md">
      <div class="q-mt-xl">
        <div class="row">
           
            <div class="col-md-6 offset-md-3 col-sm-12 col-xs-12">
                <form>

                        <div class="text-h4 text-primary text-center text-bold">Start a New Saving</div>
                       <q-select class="q-mt-sm" v-model="investmentData.plan" :options="plans" label="Plan">
                            <template v-slot:prepend>
                            <q-icon name="category" />
                            </template>
                        </q-select>

                        <q-select class="q-mt-sm" v-model="investmentData.product" :options="products" label="Desired Product">
                            <template v-slot:prepend>
                            <q-icon name="grain" />
                            </template>
                        </q-select>
                        
                        <div class="q-mt-sm">
                            <div>
                                <q-btn label="Submit" @click="createInvestment()"  no-caps class="q-px-lg" unelevated type="submit" color="primary"/>
                            </div>
                          <div class="text-body1 q-mt-sm"><small>Find out more about how it works <span class="text-primary text-bold cursor-pointer" @click="$router.push({ name: 'login'})">here</span></small></div>

                        </div>
                        
                    </form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {Notify} from 'quasar'

export default {
    components: {
       
    },
    data () {
        return {
            amount: null,
            full_name: null,
            email:null,
            showBag: false,
            investmentData: {
                paidAmount: null,
                remainingAmount: null,
                totalAmount: null,
                isDue: false,
                plan: null,
                product: null
            },
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
            },
            options: [
                'Basic', 'Standard', 'Premium'
            ],
        }
    },

    computed: {
        ...mapGetters({
            plans: 'plans',
            products: 'products',
        }),
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
        async createInvestment(){
            this.investmentData.plan = this.investmentData.plan.value
            this.investmentData.product = this.investmentData.product.value
            this.investmentData.user = this.$store.getters.user.id
            
            let plan = await this.$store.dispatch('getPlan',this.investmentData.plan)
            let now = new Date();
            let daysInMonth = 30//new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
            let dueDate = now.setDate(now.getDate()+30)
            console.log("Days in this month are>>>",daysInMonth,plan)
            this.investmentData.totalAmount = plan.data.unitAmount * daysInMonth
            this.investmentData.remainingAmount = plan.data.unitAmount * daysInMonth
            this.investmentData.paidAmount = 0

            this.investmentData.dueDate = dueDate;
            console.log("THe Investment to be created is>>>",this.investmentData)
            this.$store.dispatch('createInvestment',this.investmentData).then(investment=>{
                console.log("Ivestment Added>>>",investment)
                Notify.create({
                    spinner: true,
                    message: 'savings started successfully...',
                    timeout: 2000,
                    type:'positive'
                })
                this.$store.dispatch('refreshUser')
                let self = this
                setTimeout(()=>{
                     self.$router.push("/savings")
                },2000)
               
            }).catch(error=>{  
                    console.log("Error",error)
                    if (error.response && error.response.status === 400) {
                        this.errors = error.response.data.message[0].messages;
                    }

                // alert(this.errors[0].message)
                Notify.create({message:this.errors[0].message,type:'negative',position:'top'})


                })
            
        },
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
        this.$store.dispatch('plans')
        this.$store.dispatch('products')

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
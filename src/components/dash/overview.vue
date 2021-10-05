<template>
  <div>
      <div>
            <div>
                <div class="row" v-if="user.role.name=='Authenticated'">
                    
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="topic" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Investments</div>
                                    <div class="text-body1 text-light" >{{ user.investments.length }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="account_balance_wallet" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Amount Saved</div>
                                    <div class="text-body1 text-light" ><span>&#8358;</span> {{totalInvestment | toCurrency}}</div>
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
                                    <div class="text-h5 text-bold">Next Due Date</div>
                                    <div class="text-body1 text-light" v-if="user.investments.length>0" >{{ new Date(user.investments[0].dueDate).toDateString() }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>


                <!-- Admin Items -->

                <div class="row" v-if="user.role.name=='Admin'">
                    
                    <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="topic" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Users</div>
                                    <div class="text-body1 text-light" >{{ users.length }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="account_balance_wallet" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Savings</div>
                                    <div class="text-body1 text-light" >{{allsavings.length}}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="today" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Due Savings</div>
                                    <div class="text-body1 text-light" >{{ duesavings.length }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="today" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Total Deposited</div>
                                    <div class="text-body1 text-light" ><span>&#8358;</span> {{ totalDeposited | toCurrency }}</div>
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
            myDate: '',
            investments: [],
            totalInvestment: 0,
            users: [],
            allsavings: [],
            duesavings: [],
            totalDeposited: 0,
            transactions: []
        }
    },
    computed: {
        user(){
           return this.$store.getters.user
        },

         userInvestments(){
           return this.$store.getters.userInvestments
        },
       
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

    async mounted () {
        await this.$store.dispatch('refreshUser')
        //this.$store.dispatch('userInvestments')
       // this.$store.dispatch('Auth/wallet')
       //console.log("investment data>>>",this.user.investments)
       if(this.user.role.name=='Authenticated'){
           this.user.investments.forEach(investment=>{
           console.log(this.totalInvestment,investment.paidAmount)
           if(investment.paidAmount){
               this.totalInvestment += investment.paidAmount
           }
           
       })
        this.calcDate()
       }
       
        else if(this.user.role.name=='Admin'){
             this.$store.dispatch('getUsers').then(users=>{
             this.users = users
            }).catch(err=>{
                console.log("Unable to fetch users",err)
            })
            this.$store.dispatch('getSavings').then(async allsavings=>{
             this.allsavings = allsavings
             this.duesavings = await this.allsavings.filter(saving=>{
                 let today = new Date();
                 let threeDaysAhead = today.setDate(today.getDate()+3)
                 return new Date(saving.dueDate) <= threeDaysAhead && saving.status != "progressing"
             })
            }).catch(err=>{
                console.log("Unable to fetch allsavings",err)
            })
            this.$store.dispatch('getTransactions').then(transactions=>{
             this.transactions = transactions
             //get total deposited
             transactions.forEach(transaction=>{
                  this.totalDeposited += transaction.amount
             })
            }).catch(err=>{
                console.log("Unable to fetch transactions",err)
            })
        }
       
    }
}
</script>

<style>

</style>
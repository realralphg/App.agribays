<template>
  <div>

      <div class="q-pa-md">

        <q-table
            flat
            title=""
            :data="investments"
            :columns="columns"
            row-key="name"
            >
             <template v-slot:body-cell-action="props">
             
              <q-td :props="props">
            <q-btn
              color="positive"
              label="Mark as Complete"
              icon-right="view"
              no-caps
              flat
              dense
              v-if="props.row.status=='progressing'"
              @click="complete(props.row.id)"
            />
            
          </q-td>
            </template>
            

        </q-table>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {Notify} from 'quasar'

export default {
    data () {
    return {
      columns: [
        { name: 'ID', align: 'left', label: 'ID', field: row => row.id, sortable: true },
        { name: 'Plan',  align: 'left', label: 'Plan', field: row => row.plan.name,  sortable: true },
        { name: 'Product',  align: 'left', label: 'Product', field: row =>row.product.name ,  sortable: true },
        { name: 'User',  align: 'left', label: 'User', field: row => row.user.fname+" "+row.user.lname, },
        { name: 'User Contact',  align: 'left', label: 'User Contact', field: row => row.user.phone+" || "+row.user.email, },
        { name: 'Status',  align: 'left', label: 'Status', field: row =>row.status },
        { name: 'Total Amount',  align: 'left', label: 'Total Amount', field: row => row.totalAmount, },
        { name: 'Paid Amount',  align: 'left', label: 'Paid Amount', field: row => row.paidAmount,  },
        { name: 'Due Date',  align: 'left', label: 'Due Date', field: row => new Date(row.dueDate).toDateString(), },

        { name: 'action',  align: 'left', label: 'Actions', field: row => row.action }
      ],

      investments: []
      
    }

    },

    computed: {
     
    },

    mounted () {
     this.loadInvestments()

    },
    methods: {
     complete(investmentId){
       this.$store.dispatch("completeInvestment",investmentId).then(success=>{
          this.loadInvestments()
           Notify.create({
                    spinner: true,
                    message: 'Investment Marked as Completed...',
                    timeout: 2000,
                    type:'positive'
                })

         console.log(success)
       }).catch(error=>{
         console.log(error)
       })
     },
     loadInvestments(){
        this.$store.dispatch("getSavings").then((investments)=>{
         console.log("hello")
         this.investments = investments
      })
     }
    }
}
</script>

<style scoped>

</style>
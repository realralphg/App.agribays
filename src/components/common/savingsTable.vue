<template>
  <div>
      <q-btn class="q-px-lg float-right item-right" float-right  @click="$router.push({ name: 'newSaving'})"  unelevated label="New Saving" type="submit" color="primary" no-caps/>

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
              label="View/Deposit"
              icon-right="view"
              no-caps
              flat
              dense
              v-if="!props.row.isDue"
              @click="deposit(props.row.id)"
            />
          </q-td>
            </template>
        </q-table>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
    return {
      columns: [
        { name: 'ID', align: 'left', label: 'ID', field: row => row.id, sortable: true },
        { name: 'Plan',  align: 'left', label: 'Plan', field: row => row.plan.name,  sortable: true },
        { name: 'Product',  align: 'left', label: 'Product', field: row => row.product.name,  sortable: true },
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
      this.$store.dispatch("userInvestments",this.$store.getters.user.id).then((investments)=>{
         this.investments = investments
      })

    },
    methods: {
     deposit(investmentId){
       this.$router.push("/deposit/"+investmentId)
     }
    }
}
</script>

<style scoped>

</style>
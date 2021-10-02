<template>
  <div>
      <div class="q-pa-md">
        <q-table
            flat
            title=""
            :data="transactions"
            :columns="columns"
            row-key="name"
            />
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
    return {
      columns: [
        {
          name: 'ID',
          required: true,
          label: 'NO.',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
          
        },
        { name: 'Reference', align: 'left', label: 'Date', field: row => row.reference, sortable: true },
        { name: 'Type',  align: 'left', label: 'Type', field: row => row.type,  sortable: true },
        { name: 'Savings ID',  align: 'left', label: 'Savings ID', field: row => row.investment.id,  sortable: true },
        { name: 'Amount',  align: 'left', label: 'Amount', field: row => row.amount, },
        { name: 'Status',  align: 'left', label: 'Status', field: row => row.status,  },
        { name: 'Date',  align: 'left', label: 'Date', field: row => new Date(row.createdAt).toDateString(), },
      ],
      transactions: [
      ]
    }

    },

    computed: {
      ...mapGetters({
        transactions: 'Auth/transactions',
        subscription: 'Auth/subscription'
      })
    },

    mounted () {
       this.$store.dispatch("userTransactions",this.$store.getters.user.id).then((transactions)=>{
         this.transactions = transactions
      })
    }
}
</script>

<style scoped>

</style>
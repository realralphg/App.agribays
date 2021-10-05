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
        { name: 'Reference', align: 'left', label: 'Reference', field: row => row.reference, sortable: true },
        { name: 'Type',  align: 'left', label: 'Type', field: row => row.type,  sortable: true },
        { name: 'User',  align: 'left', label: 'User', field: row => row.user.fname+" "+row.user.lname+" || "+row.user.email,  sortable: true },
        { name: 'Amount',  align: 'left', label: 'Amount', field: row => row.amount, },
        { name: 'Status',  align: 'left', label: 'Status', field: row => row.status,  },
        { name: 'Savings ID',  align: 'left', label: 'Savings ID', field: row => row.investment.id, },
        { name: 'Date',  align: 'left', label: 'Date', field: row => new Date(row.createdAt).toDateString(), },
      ],
      transactions: [
      ]
    }

    },

    computed: {
     
    },

    mounted () {
       this.$store.dispatch("getTransactions").then((transactions)=>{
          this.transactions = transactions
      })
    }
}
</script>

<style scoped>

</style>
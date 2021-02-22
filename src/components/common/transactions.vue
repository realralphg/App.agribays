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
          name: 'name',
          required: true,
          label: 'NO.',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Date', align: 'left', label: 'Date', field: row => row.createdAt, sortable: true },
        { name: 'Type',  align: 'left', label: 'Type', field: row => row.type,  sortable: true },
        { name: 'Amount',  align: 'left', label: 'Amount', field: row => row.amount, },
        { name: 'Status',  align: 'left', label: 'Status', field: row => row.status,  },
        { name: 'Paid Days',  align: 'left', label: 'Plan', field: row => row.paid_days, },
        { name: 'Description',  align: 'left', label: 'Description', field: row => row.description,  sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: '1',
          Date: '1st April 2020',
          Time: '1:53PM',
          Amount: 5000,
          Status: 'Successful',
          Plan: 'NGN 500',
          Description: 'Added savings'
        },
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
      this.$store.dispatch('Auth/transactions')
      this.$store.dispatch('Auth/subscription')
    }
}
</script>

<style scoped>

</style>
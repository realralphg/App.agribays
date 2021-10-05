<template>
  <div>

      <div class="q-pa-md">

        <q-table
            flat
            title=""
            :data="users"
            :columns="columns"
            row-key="name"
            >
             <template v-slot:body-cell-action="props">
             
              <q-td :props="props">
            <q-btn
              color="negative"
              label="Delete"
              icon-right="view"
              no-caps
              flat
              dense
              @click="deleteUser(props.row.id)"
            />
          </q-td>
            </template>
        </q-table>
        </div>
  </div>
</template>

<script>
import {Notify} from 'quasar'

import { mapGetters } from 'vuex'

export default {
    data () {
    return {
      columns: [
        { name: 'ID', align: 'left', label: 'ID', field: row => row.id, sortable: true },
        { name: 'Name',  align: 'left', label: 'Name', field: row => row.fname,  sortable: true },
        { name: 'Email',  align: 'left', label: 'Email', field: row => row.email,  sortable: true },
        { name: 'Phone',  align: 'left', label: 'Phone', field: row => row.phone, },
        { name: 'Address',  align: 'left', label: 'Address', field: row => row.address,  },
        { name: 'State',  align: 'left', label: 'State', field: row => row.state, },
        { name: 'Town',  align: 'left', label: 'Town', field: row => row.town, },
         { name: 'Total Investments',  align: 'left', label: 'Total Investments', field: row => row.investments.length, },
        { name: 'action',  align: 'left', label: 'Actions', field: row => row.action }
      ],

      users: []
      
    }

    },

    computed: {
     
    },

    mounted () {
      this.loadUsers()

    },
    methods: {
     deleteUser(userId){
        this.$store.dispatch("deleteUser",userId).then(success=>{
          this.loadUsers()
           Notify.create({
                    spinner: true,
                    message: 'User Deleted...',
                    timeout: 2000,
                    type:'positive'
                })

         console.log(success)
       }).catch(error=>{
          Notify.create({
                    spinner: true,
                    message: 'Cant Delete User...',
                    timeout: 2000,
                    type:'positive'
                })
         console.log(error)
       })
     },

     loadUsers(){
       this.$store.dispatch("getUsers").then((users)=>{
         this.users = users
      })
     },
    }
}
</script>

<style scoped>

</style>
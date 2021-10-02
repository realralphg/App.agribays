<template>
  <div class="">
    <q-layout view="hHh Lpr lff" container style="height: 100vh;" class="">
      <SideBar></SideBar>

      <q-page-container>
        <q-page padding class="q-pa-md">
          <Savings />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Savings from 'components/dash/savings'
import SideBar from 'components/SideBar'

export default {
    components: {
        Savings, SideBar
    },
    data () {
        return {
            drawer: false,
            drawer2: true 
        }
    },
        
    methods: {
        logout () {
        this.$store.dispatch('logout').then(()=>{
          this.$router.push('/login')
        })
      }
    }
}
</script>

<style scoped>
.active-class {
    background-color: #F6F7F9;
    border-left: 2px solid #F7A200;
}

.active-home {
    background-color: #F6F7F9;
    border-left: 2px solid #F7A200;
}

.activer:hover {
    background-color: #F6F7F9;
    border-left: 5px solid #F7A200;
}

</style>
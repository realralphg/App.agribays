<template>
  <div class="">
    <q-layout view="hHh Lpr lff" container style="height: 100vh;" class="">
      <SideBar></SideBar>

      <q-page-container>
        <q-page padding class="q-pa-md" >
           <div v-if="user.role.name=='Authenticated' && user.investments.length==0 && this.$route.name != 'account' && this.$route.name != 'edit'">
              <q-btn class="q-px-lg" @click="$router.push({ name: 'newSaving'})"  unelevated label="Start Saving" type="submit" color="primary" no-caps/>
            </div>
          <Main />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Main from 'components/dashboard'
import SideBar from 'components/SideBar'

export default {
    components: {
        Main, SideBar
    },
    data () {
        return {
            drawer: false,
            drawer2: true 
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
      logout () {
        this.$store.dispatch('logout').then(()=>{
          this.$router.push({name: 'login'})
        })
      }
    },

    mounted(){
      console.log("Name",this.$route.name)
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
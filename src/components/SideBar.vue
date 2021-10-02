 <template>
 <div> 
 <q-header class="bg-white">
        <q-toolbar class="q-pa-md" outlined>
          <q-btn flat @click="drawer = !drawer" color="primary" round dense icon="menu" />
          <q-toolbar-title class="text-h5 text-bold text-primary">Agrobays</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="220"
        :breakpoint="500"
        bordered
        content-class="bg-white"
      >
        <q-scroll-area class="fit q-pt-xl">
          <q-list>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'account'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="person" />
                </q-item-section>
                <q-item-section>
                  Account
                </q-item-section>
              </q-item>
            </template>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'home'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="dashboard" />
                </q-item-section>
                <q-item-section>
                  Dashboard
                </q-item-section>
              </q-item>
            </template>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'savings'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="account_balance" />
                </q-item-section>
                <q-item-section>
                  Savings
                </q-item-section>
              </q-item>
            </template>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'transactions'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="receipt_long" />
                </q-item-section>
                <q-item-section>
                  Transactions
                </q-item-section>
              </q-item>
            </template>
            <!-- <template>
              <q-item class="q-py-sm" clickable v-ripple  @click="$router.push({name: 'store'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="shop" />
                </q-item-section>
                <q-item-section>
                  Store
                </q-item-section>
              </q-item>
            </template> -->
            <!-- <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'food'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="share" />
                </q-item-section>
                <q-item-section>
                  Food Bag
                </q-item-section>
              </q-item>
            </template> -->
            <!-- <template>
              <q-item class="q-py-sm" clickable v-ripple active-class="text-primary"  @click="$router.push({name: 'account'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="person" />
                </q-item-section>
                <q-item-section>
                  Account
                </q-item-section>
              </q-item>
            </template> -->            
            <template>
              <q-item class="q-py-md position-bottom q-mt-xl" clickable v-ripple @click="logout">
                <q-item-section avatar>
                  <q-icon color="primary" name="exit_to_app" />
                </q-item-section>
                <q-item-section>
                  Logout
                </q-item-section>
              </q-item>
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
      </template>
<script>
export default {
    data () {
        return {
            drawer: false,
            drawer2: true 
        }
    },
        
    methods: {
      logout () {
        this.$store.dispatch('logout')
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
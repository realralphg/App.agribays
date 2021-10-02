<template>
  <div class="q-pa-lg">
    <section>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <q-card class="q-pa-lg row" flat>
            <div class="col-md-3 col-sm-12 col-xs-12 text-center">
              <q-avatar size="100px" font-size="52px" color="secondary" text-color="primary" icon="person" />
            </div>
            <div class="col-md-9 col-sm-12 col-xs-12 q-pl-lg">
              <div class="q-mt-md">
                <div class="text-body1 text-bold">{{ user.fname }}  {{ user.lname }}</div>
                <div class="text-caption">{{ user.email }}</div>
                <div class="text-caption text-bold">{{ user.phone }}</div>
                <div class="q-mt-sm">
                  <q-btn unelevated color="primary" @click="$router.push({name: 'edit'})" class="q-mr-sm" label="Edit" no-caps />
                
                  <q-btn @click="$router.push({name: 'newSaving'})" color="dark"  class="q-mx-sm" label="Start a new Saving" no-caps />
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </section>
    <section class="q-pt-lg">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-mt-md q-pr-lg">
          <q-card flat class="q-pa-lg">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Address</q-item-label>
                <q-item-label caption lines="2">{{ user.address }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-mt-sm">
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">State</q-item-label>
                <q-item-label caption lines="2">{{ user.state }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-mt-sm">
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Country</q-item-label>
                <q-item-label caption lines="2">{{ user.country }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      name: 'Akande George',
      email: 'george.akande.goa@gmail.com',
      phone: '08163040074',
      starterDate: '',
      enderDate: '',
      user: {}
    }
  },

  computed: {
   
  },

   methods: {
        planAct (plan) {
          alert(plan.name)
        },
        calcDate () {
            let endDate = this.subscription[0].endDate
            let createdDate = this.subscription[0].createdAt
            let dateFinder = new Date (endDate).toDateString()
            let daterFinder = new Date (Date (createdDate)).toDateString()
            let dayAt = dateFinder.split(" ")[2]
            let monthAt = dateFinder.split(" ")[1]
            this.enderDate = dayAt + " " + monthAt
            let dayAtr = daterFinder.split(" ")[2]
            let monthAtr = daterFinder.split(" ")[1]
            this.starterDate = dayAtr + " " + monthAtr

        }
    },

  mounted () {
    this.user = this.$store.getters.user
    this.calcDate()
  },
}
</script>

<style>

</style>
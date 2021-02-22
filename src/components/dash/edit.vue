<template>
  <div>
      <section>
          <div class="q-pa-sm">
            <div class="q-gutter-y-md">
                <q-card flat class="bg-transparent">
                    <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    :style="{maxWidth: $q.screen.gt.sm?'50%':'100%'}"
                    >
                    <q-tab name="profile" label="Profile" no-caps/>
                    <q-tab name="address" label="Address" no-caps/>
                    </q-tabs>

                    <q-separator style="width: 50%" class="" />

                    <q-tab-panels v-model="tab" animated class="q-mt-md bg-transparent">
                    <q-tab-panel name="profile">
                        <profile />
                    </q-tab-panel>

                    <q-tab-panel name="address">
                        <addresses />
                    </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
        </div>
      </section>
  </div>
</template>

<script>
import profile from 'components/account/profile.vue'
import addresses from 'components/account/address.vue'
export default {
    components: {
        profile,
        addresses,
    },
  data () {
    return {
      tab: 'profile'
    }
  }
}
</script>

<style>

</style>
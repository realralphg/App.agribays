<template>
  <q-page class="">
    <dRegister v-if="theroute == 'register'" />
    <dLogin v-if="theroute == 'login'" />
  </q-page>
</template>

<script>
import dRegister from 'components/register'
import dLogin from 'components/login'
export default {
  name: 'PageIndex',
  components: {
    dRegister,
    dLogin
  },
  computed: {
    theroute(){return this.$route.name}
  }
}
</script>
